/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const GenericResource = require('../../../../lib/connect/api/base');
const { HttpError, APIError } = require('../../../../lib/connect/api/errors');
const { ConnectClient } = require('../../../../index');

describe('GenericResource', () => {
  let client;
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
    fetch.mockResponseOnce(JSON.stringify(error), { status: 400, headers: { 'content-type': 'application/json' } });
    await expect(base.fetch('/')).rejects.toThrow(APIError, expected);
  });
  it('fetch returns an object if response is json', async () => {
    const base = new GenericResource(client, '/');
    const obj = {
      id: 'id',
      text: 'text',
    };
    fetch.mockResponseOnce(JSON.stringify(obj), { status: 200, headers: { 'content-type': 'application/json' } });
    const response = await base.fetch('/');
    await expect(response.json()).resolves.toEqual(obj);
  });
  it('get returns an object by its id', async () => {
    const base = new GenericResource(new ConnectClient('https://localhost', '1234567890'), '/objects');
    const obj = {
      id: 'id',
      text: 'text',
    };
    fetch.mockResponseOnce(JSON.stringify(obj), { status: 200, headers: { 'content-type': 'application/json' } });
    const response = await base.get('id');
    expect(fetch).toBeCalledWith('https://localhost/objects/id', expect.anything());
    expect(response).resolves.toEqual(obj);
  });
});
