const { ConnectClient, Listings } = require('../../../../index');

describe('Listings', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchListingRequests invokes search on listing requests endpoint', async () => {
    const mockedFn = client.listingRequests.search = jest.fn();
    const sub = new Listings(client);
    await sub.searchListingRequests({field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({field: 'value'});
  });
  it('createListingRequest invokes create on listing requests endpoint', async () => {
    const mockedFn = client.listingRequests.create = jest.fn();
    const sub = new Listings(client);
    await sub.createListingRequest({});
    expect(mockedFn).toHaveBeenCalledWith({});
  });
  it.each([
    ['cancel'],
    ['complete'],
    ['deploy'],
    ['refine'],
    ['submit'],
    ['get'],
  ])('%sListingRequest invoke the corresponding a action on a listing request', async (action) => {
    const mockedFn = client.listingRequests[action] = jest.fn();
    const listings = new Listings(client);
    const method = listings[`${action}ListingRequest`].bind(listings);
    await method('LSTR-000');
    expect(mockedFn).toHaveBeenCalledWith('LSTR-000');
  });
});