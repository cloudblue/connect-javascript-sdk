/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

 const { converge, concat, compose, toUpper, head, tail } = require('ramda');
 const UsageAggregateResource = require('../../../../lib/connect/api/usageAggregates');
 const { ConnectClient } = require('../../../../index');
 
 const capitalize = converge(concat, [compose(toUpper, head), tail]);
 
 describe('UsageAggregateResource', () => {
   let client;
 
   const contentTypeJson = { 'content-type': 'application/json' };
 
   beforeAll(() => {
     client = new ConnectClient('https://localhost', '1234567890');
   });
   beforeEach(() => {
     fetch.resetMocks();
   });
  
 
  it('returns agregates resource of usage', async () => {
    const cases = new UsageAggregateResource(client);
    const attachment = [{ asset_id: 'AS-000' }];
    fetch.mockResponseOnce(JSON.stringify(attachment), { status: 200, headers: contentTypeJson });
    await expect(cases.search()).resolves.toEqual(attachment);
    expect(fetch).toBeCalledWith('https://localhost/usage/aggregates', expect.anything());
  });

});
