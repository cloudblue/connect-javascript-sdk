/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const UsageChunkResource = require('../../../../lib/connect/api/usageChunks');
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
 
  it('close chunk file', async () => {
    const req = new UsageChunkResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    const reqBody = {
      external_billing_id: 'BI-000',
      external_billing_note: 'Some Note',
    };
    await expect(req.close('UF-0000', 'BI-000', 'Some Note')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/usage/chunks/UF-0000/close', {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify(reqBody),
    });    
  });

  it.each([
    ['download', 'GET'],
    ['regenerate', 'POST']
  ])('performs the %s action', async (action, act) => {
    const req = new UsageChunkResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    const method = req[action].bind(req);
    await method('UF-0000');
    expect(fetch).toBeCalledWith(`https://localhost/usage/chunks/UF-0000/${action}`, {
      method: act,
      headers: expect.anything(),
    });    
  });
});
