/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const RequestResource = require('../../../../lib/connect/api/requests');
const { ConnectClient } = require('../../../../index');

describe('RequestResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
  it.each([
    ['inquire', { template_id: 'TL-000' }, {id: 'PR-000', type: 'purchase'}],
    ['approve', { template_id: 'TL-000' }, {id: 'PR-000', type: 'purchase'}]
  ])('performs the %s action', async (action, request, response) => {
    const req = new RequestResource(client);
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    const method = req[action].bind(req);
    await expect(method('PR-000', request)).resolves.toEqual(response);
    expect(fetch).toBeCalledWith(`https://localhost/requests/PR-000/${action}`, expect.anything());
  });
  it('changes the status of the request to pending', async () => {
    const req = new RequestResource(client);
    const response = {id: 'PR-000', type: 'purchase', status: 'pending'};
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    await expect(req.pending('PR-000')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/requests/PR-000/pend', {
      method: 'POST',
      headers: expect.anything()
    });    
  });
  it('changes the status of the request to failed', async () => {
    const req = new RequestResource(client);
    const response = {id: 'PR-000', type: 'purchase', status: 'failed'};
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    await expect(req.fail('PR-000', 'test reason')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/requests/PR-000/fail', {
      method: 'POST',
      body: JSON.stringify({
        reason: 'test reason',
      }),
      headers: expect.anything()
    });    
  });
});