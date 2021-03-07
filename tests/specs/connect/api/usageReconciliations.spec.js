/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const UsageReconciliationResource = require('../../../../lib/connect/api/usageReconciliations');
const { ConnectClient } = require('../../../../index');
const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('UsageChunkResource', () => {
  let client;
  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it.each([
    ['processedfile'],
    ['uploadedfile']
  ])('performs the %s action', async (action) => {
    const req = new UsageReconciliationResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    const method = req[action].bind(req);
    await method('UF-0000');
    expect(fetch).toBeCalledWith(`https://localhost/usage/reconciliations/UF-0000/${action}`, {
      method: 'GET',
      headers: expect.anything(),
    });    
  });
});
