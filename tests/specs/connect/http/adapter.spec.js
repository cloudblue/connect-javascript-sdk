/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
const { AbstractHttpAdapter, DefaultHttpAdapter } = require('../../../../lib/connect/http/adapter');

describe('AbstractHttpAdapter', () => {
  it('constructor throw an error', () => {
    expect(() => new AbstractHttpAdapter()).toThrow(Error);
  });
  it('prepareRequest throw an error if not overridden', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    expect(() => ta.prepareRequest('url', {})).toThrow(Error);
  });
  it('parseResponse throw an error if not overridden', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    expect(() => ta.parseResponse({})).toThrow(Error);
  });
  it('beforeRequest set/get a list of middlewares', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    const myfun = () => { };
    ta.beforeRequest = [myfun];
    expect(ta.beforeRequest).toEqual([myfun]);
  });
  it('beforeRequest be an empty array', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    ta.beforeRequest = null;
    expect(ta.beforeRequest).toEqual([]);
  });
  it('afterResponse set/get a list of middlewares', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    const myfun = () => { };
    ta.afterResponse = [myfun];
    expect(ta.afterResponse).toEqual([myfun]);
  });
  it('afterResponse be an empty array', () => {
    class TestAdapter extends AbstractHttpAdapter { }
    const ta = new TestAdapter();
    ta.afterResponse = null;
    expect(ta.afterResponse).toEqual([]);
  });
});

describe('DefaultHttpAdapter', () => {

  const prepInvalidBody = { body: new Error('a') };
  const prepInvalidBodyResp = prepInvalidBody;
  const prepEmptyBody = { body: {} };
  const prepEmptyBodyResp = prepEmptyBody;
  const prepStringifyArray = { body: [] };
  const prepStringifyArrayResp = { body: '[]', headers: { 'Content-Type': 'application/json' } };
  const prepStringifyObject = { body: { a: 'b' } };
  const prepStringifyObjectResp = { body: '{"a":"b"}', headers: { 'Content-Type': 'application/json' } };

  it.each([
    ['do nothing if body is neither an array nor a plain object', prepInvalidBody, prepInvalidBodyResp],
    ['do nothing if empty body', prepEmptyBody, prepEmptyBodyResp],
    ['stringify body if it is an array and add content type json', prepStringifyArray, prepStringifyArrayResp],
    ['stringify body if it is a plain object and add content type json', prepStringifyObject, prepStringifyObjectResp],
  ])('prepareRequest %s', (name, options, expected) => {
      const adapter = new DefaultHttpAdapter();
      const req = adapter.prepareRequest('http://localhost', options);
      expect(req.options).toEqual(expected);
  });

  it('prepareRequest add header content-type=application/json if body is json serializable', async () => {
    const options = {body: {a: 'b'}};
    const adapter = new DefaultHttpAdapter();
    const req = adapter.prepareRequest('http://localhost', options);
    expect(req.options).toHaveProperty('headers', {'Content-Type': 'application/json'});
  });
  it('parseResponse return the response unmodified', () => {
    const options = {body: {a: 'b'}};
    const adapter = new DefaultHttpAdapter();
    const response = { ok: true };
    const expected = response;
    const resp = adapter.parseResponse(response);
    expect(resp).toEqual(expected);
  });
  it('fetch apply beforeRequest middleware', async () => {
    const adapter = new DefaultHttpAdapter();
    const fetch = adapter._fetch = jest.fn();
    fetch.mockReturnValue(Promise.resolve({}));
    adapter.beforeRequest = [(url, options) => {
      options.processed = true;
      return {
        url: `[PROCESSED]${url}`,
        options: options
      }
    }];
    const response = await adapter.fetch('http://localhost', {});
    expect(fetch).toHaveBeenCalledWith('[PROCESSED]http://localhost', {processed: true});
  });
  it('fetch apply afterResponse middleware', async () => {
    const adapter = new DefaultHttpAdapter();
    const fetch = adapter._fetch = jest.fn();
    fetch.mockReturnValue(Promise.resolve({}));
    adapter.afterResponse = [(response) => {
      response.processed = true;
      return response;
    }];
    const response = await adapter.fetch('http://localhost');
    expect(response).toHaveProperty('processed', true);
  });
});