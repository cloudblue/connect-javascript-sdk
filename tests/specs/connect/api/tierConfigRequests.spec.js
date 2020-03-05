/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const TierConfigRequestResource = require('../../../../lib/connect/api/tierConfigRequests');
const { ConnectClient } = require('../../../../index');


describe('TierConfigRequestResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('changes the status of the request to pending', async () => {
    const req = new TierConfigRequestResource(client);
    fetch.mockResponseOnce({ status: 204 });
    await expect(req.pending('TCR-000')).resolves.toBeUndefined();
    expect(fetch).toBeCalledWith('https://localhost/tier/config-requests/TCR-000/pend', {
      method: 'POST',
      headers: expect.anything()
    });    
  });
  it('changes the status of the request to inquire', async () => {
    const req = new TierConfigRequestResource(client);
    fetch.mockResponseOnce({ status: 204 });
    await expect(req.inquire('TCR-000')).resolves.toBeUndefined();
    expect(fetch).toBeCalledWith('https://localhost/tier/config-requests/TCR-000/inquire', {
      method: 'POST',
      headers: expect.anything()
    });    
  });
  it('changes the status of the request to failed', async () => {
    const req = new TierConfigRequestResource(client);
    fetch.mockResponseOnce({ status: 204 });
    await expect(req.fail('TCR-000', 'test reason')).resolves.toBeUndefined();
    expect(fetch).toBeCalledWith('https://localhost/tier/config-requests/TCR-000/fail', {
      method: 'POST',
      body: JSON.stringify({
        reason: 'test reason',
      }),
      headers: expect.anything()
    });    
  });
  it('approves the request and returns the rendered template', async () => {
    const req = new TierConfigRequestResource(client);
    const request = {
      template: {
        id: 'TL-000'
      },
    };
    const response = { template: { id: 'TL-000', name: 'test template' } };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 204, headers:  contentTypeJson });
    await expect(req.approve('TCR-000', request)).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/tier/config-requests/TCR-000/approve', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: expect.anything()
    });    
  });
});