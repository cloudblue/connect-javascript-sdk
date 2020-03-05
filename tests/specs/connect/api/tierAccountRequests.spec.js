/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const TierAccountRequestResource = require('../../../../lib/connect/api/tierAccountRequests');
const { ConnectClient } = require('../../../../index');


describe('TierAccountRequestResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('changes the status of the request to accepted', async () => {
    const req = new TierAccountRequestResource(client);
    const response = { id: 'TAR-000', status: 'accepted' };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    await expect(req.accept('TAR-000')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/tier/account-requests/TAR-000/accept', {
      method: 'POST',
      headers: expect.anything(),
     
    });    
  });
  it('changes the status of the request to ignored', async () => {
    const req = new TierAccountRequestResource(client);
    const response = { id: 'TAR-000', status: 'ignored' };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    await expect(req.ignore('TAR-000', 'ignore')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/tier/account-requests/TAR-000/ignore', {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify({
        reason: 'ignore',
      }),
    });    
  });
});