/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const UsageRecordResource = require('../../../../lib/connect/api/usageRecords');
const { ConnectClient } = require('../../../../index');
const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('UsageRecordResource', () => {
  let client;
  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
 
  it('close all records file', async () => {
    const req = new UsageRecordResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    const reqBody = {
      external_billing_id: 'BI-000',
      external_billing_note: 'Some Note',
    };
    await expect(req.close('UF-0000', 'BI-000', 'Some Note')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/usage/records/UF-0000/close', {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify(reqBody),
    });    
  });
  it('close all record file', async () => {
    const req = new UsageRecordResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    const reqBody = {
      id: 'RI-000',
      external_billing_id: 'BI-000',
      external_billing_note: 'Some Note',
    };
    await expect(req.closeRecords('UF-0000', 'RI-000', 'BI-000', 'Some Note')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/usage/records/UF-0000/close-records', {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify(reqBody),
    });    
  });
});
