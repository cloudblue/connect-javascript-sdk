/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const GenericResource = require('../../../lib/connect/api/base');
const { HttpError, APIError } = require('../../../lib/connect/api/errors');
const { ConnectClient } = require('../../../index');


const fetch = jest.mock('node-fetch');

describe('GenericResource', () => {
  it('fetch throw a HttpError if http status != 2xx and content type is not JSON', async () => {
    const base = new GenericResource(new ConnectClient('https://localhost', '1234567890'));
    fetch.mockResolvedValue = {
      ok: false,
      status: 400,
      body: 'text',
      headers: { 'content-type': 'text/plain' }
    };
    expect(await base.fetch('/')).toThrow(HttpError, { status: 400, message: 'text' });
  });
  // it('fetch should throw a APIError if content type is JSON', async () => {
  //     const base = new GenericResource(new ConnectClient('https://localhost', '1234567890'));
  //     const error = {
  //         error_code: 'SYS_001',
  //         errors: [
  //             'test error message'
  //         ]
  //     };
  //     nock('https://localhost')
  //         .get('/')
  //         .reply(400, JSON.stringify(error), {'content-type': 'application/json'});

  //     await base.fetch('/').should.be.rejectedWith(APIError, {
  //         status: 400, 
  //         json: error,
  //         errorCode: error.error_code,
  //         errors: error.errors
  //     });
  // });
});
