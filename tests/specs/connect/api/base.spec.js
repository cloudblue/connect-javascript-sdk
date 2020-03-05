/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */


const GenericResource = require('../../../../lib/connect/api/base');
const { HttpError, APIError } = require('../../../../lib/connect/api/errors');
const { ConnectClient } = require('../../../../index');

describe('GenericResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('fetch throw a HttpError if http status != 2xx and content type is not JSON', async () => {
    const base = new GenericResource(client, '/');
    fetch.mockResponseOnce('text', { status: 400, headers: { 'content-type': 'text/plain' } });
    await expect(base.fetch('/')).rejects.toThrow(HttpError, { status: 400, message: 'text' });
  });
  it('fetch throw a APIError if http status != 2xx and content type is JSON', async () => {
    const base = new GenericResource(client, '/');
    const error = {
      error_code: 'SYS_001',
      errors: [
        'test error message'
      ]
    };
    const expected = {
      status: 400,
      json: error,
      errorCode: error.error_code,
      errors: error.errors
    };
    fetch.mockResponseOnce(JSON.stringify(error), { status: 400, headers: contentTypeJson });
    await expect(base.fetch('/')).rejects.toThrow(APIError, expected);
  });
  it('fetch returns an object if response is json', async () => {
    const base = new GenericResource(client, '/');
    const obj = {
      id: 'id',
      text: 'text',
    };
    fetch.mockResponseOnce(JSON.stringify(obj), { status: 200, headers: contentTypeJson });
    const response = await base.fetch('/');
    await expect(response.json()).resolves.toEqual(obj);
  });
  it('get returns an object by its id', async () => {
    const base = new GenericResource(client, '/objects');
    const obj = {
      id: 'id',
      text: 'text',
    };
    fetch.mockResponseOnce(JSON.stringify(obj), { status: 200, headers: contentTypeJson });
    await expect(base.get('id')).resolves.toEqual(obj);
    expect(fetch).toBeCalledWith('https://localhost/objects/id', expect.anything());
  });
  it('delete returns no content', async () => {
    const base = new GenericResource(client, '/objects');
    fetch.mockResponseOnce({ status: 204 });
    await expect(base.delete('id')).resolves.toBeUndefined();
    expect(fetch).toBeCalledWith('https://localhost/objects/id', { method: 'DELETE', headers: expect.anything() });
  });
  it('create returns the created object', async () => {
    const base = new GenericResource(client, '/objects');
    const obj = {
      id: 'id',
      text: 'text',
    };
    const body = JSON.stringify(obj);
    fetch.mockResponseOnce(body, { status: 201, headers: contentTypeJson });
    await expect(base.create(obj)).resolves.toEqual(obj);
    expect(fetch).toBeCalledWith('https://localhost/objects', {
      method: 'POST',
      body: body,
      headers: expect.objectContaining({'Content-Type': 'application/json'}),
    });
  });
  it('update returns the updated object', async () => {
    const base = new GenericResource(client, '/objects');
    const obj = {
      id: 'id',
      text: 'text',
    };
    const body = JSON.stringify(obj);
    fetch.mockResponseOnce(body, { status: 200, headers: contentTypeJson });
    await expect(base.update('id', obj)).resolves.toEqual(obj);
    expect(fetch).toBeCalledWith('https://localhost/objects/id', {
      method: 'PUT',
      body: body,
      headers: expect.objectContaining({'Content-Type': 'application/json'}),
    });
  });
  it('search for objects', async () => {
    const base = new GenericResource(client, '/objects');
    const obj = {
      id: 'id',
      text: 'text',
    };
    const body = JSON.stringify([obj]);
    fetch.mockResponseOnce(body, { status: 200, headers: contentTypeJson });
    const filter = {
      name: {
        $not: [{
          $eq: 'vasya',
        }, {
          $eq: 'petya',
        }],
      },
      age: {
        $not: {
          $eq: 10,
          $in: [1, 2, 3],
        },
      },
    };
    const expQs = 'not(eq(name,vasya))&not(eq(name,petya))&not(eq(age,10))&not(in(age,(1,2,3)))';
    await expect(base.search(filter)).resolves.toEqual([obj]);
    expect(fetch).toBeCalledWith(`https://localhost/objects?${expQs}`, expect.anything());
  });
});
