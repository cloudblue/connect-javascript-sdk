const { ConnectClient, Subscriptions } = require('../../../../index');

describe('Subscriptions', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchBillingRequests invokes search on billing requests endpoint', async () => {
    const mockedFn = client.billingRequests.search = jest.fn();
    const sub = new Subscriptions(client);
    await sub.searchBillingRequests({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({field: 'value'});
  });
  it('searchRecurringAssets invokes search on recurring assets endpoint', async () => {
    const mockedFn = client.recurringAssets.search = jest.fn();
    const sub = new Subscriptions(client);
    await sub.searchRecurringAssets({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({field: 'value'});
  });
  it('getBillingRequest invokes get on billing requests endpoint', async () => {
    const mockedFn = client.billingRequests.get = jest.fn();
    const sub = new Subscriptions(client);
    await sub.getBillingRequest('BRP-0000');
    expect(mockedFn).toHaveBeenCalledWith('BRP-0000');
  });
  it('getRecurringAsset invokes get on recurring assets endpoint', async () => {
    const mockedFn = client.recurringAssets.get = jest.fn();
    const sub = new Subscriptions(client);
    await sub.getRecurringAsset('AS-0000');
    expect(mockedFn).toHaveBeenCalledWith('AS-0000');
  });
  it('createBillingRequest invokes create on billing requests endpoint', async () => {
    const mockedFn = client.billingRequests.create = jest.fn();
    const sub = new Subscriptions(client);
    await sub.createBillingRequest({});
    expect(mockedFn).toHaveBeenCalledWith({});
  });

  it('updateBillingRequestAttributes invokes updateAttributes on billing requests endpoint', async () => {
    const mockedFn = client.billingRequests.updateAttributes = jest.fn();
    const reqBody = {
      attributes: {
        vendor: {
          external_id: '1233-321',
        }
      }
    };
    const sub = new Subscriptions(client);
    await sub.updateBillingRequestAttributes('BRP-0000', reqBody);
    expect(mockedFn).toHaveBeenCalledWith('BRP-0000', reqBody);
  });
});