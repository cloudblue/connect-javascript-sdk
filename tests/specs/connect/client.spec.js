/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const { ConnectClient } = require('../../../index');
const api = require('../../../lib/connect/api');
describe('ConnectClient', () => {
  it.each([
    ['accounts', api.AccountResource],
    ['assets', api.AssetResource],
    ['conversations', api.ConversationResource],
    ['products', api.ProductResource],
    ['requests', api.RequestResource],
    ['hubs', api.HubResource],
    ['tierAccounts', api.TierAccountResource],
    ['tierConfigRequests', api.TierConfigRequestResource],
    ['webhooks', api.WebhookResource],
  ])('%s returns an instance of the corresponding endpoint', (property, type) => {
    const client = new ConnectClient('http://server', '1234567890');
    expect(client[property]).toBeInstanceOf(type);
  });
});