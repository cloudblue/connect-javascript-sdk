/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const ConversationResource = require('../../../../lib/connect/api/conversations');
const { HttpError, APIError } = require('../../../../lib/connect/api/errors');
const { ConnectClient } = require('../../../../index');

describe('ConversationResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Returns a list of conversations attached to the business object specified by its id', async () => {
    const conv = new ConversationResource(client);
    const conversations = [
      {
        id: 'CV-001',
        messages: []
      }
    ]
    fetch.mockResponseOnce(JSON.stringify(conversations), { status: 200, headers: contentTypeJson });
    await expect(conv.getConversationsByObjectId('PR-001')).resolves.toEqual(conversations);
    expect(fetch).toBeCalledWith('https://localhost/conversations?instance_id=PR-001', expect.anything());
  });
});
