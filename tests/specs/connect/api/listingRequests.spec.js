/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const ListingRequestResource = require('../../../../lib/connect/api/listingRequests');
const { ConnectClient } = require('../../../../index');


describe('ListingRequestResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it.each([
    ['cancel'],
    ['complete'],
    ['deploy'],
    ['refine'],
    ['submit'],
  ])('invoke the %s a action on a listing request', async (action) => {
    const lstr = new ListingRequestResource(client);
    fetch.mockResponseOnce('', { status: 200, headers: contentTypeJson });
    const method = lstr[action].bind(lstr);
    await method('LSTR-000');
    expect(fetch).toBeCalledWith(`https://localhost/listing-requests/LSTR-000/${action}`, expect.anything());
  });
});