/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const BillingRequestResource = require('../../../../lib/connect/api/billingRequests');
const { ConnectClient } = require('../../../../index');


describe('BillingRequestResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('updates the billing request attributes', async () => {
    const req = new BillingRequestResource(client);
    const response =  {
      attributes: {
        vendor: {
          external_id: '1233-321',
        },
        provider: {
          external_id: '123-32-321',
        },
      },
    };
  
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    const reqBody = {
      attributes: {
        vendor: {
          external_id: '1233-321',
        }
      }
    };
    await expect(req.updateAttributes('BRP-0000', reqBody)).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/subscriptions/requests/BRP-0000/attributes', {
      method: 'PUT',
      headers: expect.anything(),
      body: JSON.stringify(reqBody),
    });    
  });
});