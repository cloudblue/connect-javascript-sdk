const { ConnectClient, Directory } = require('../../../../index');

describe('Directory', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchTierAccounts invokes search on tier accounts endpoint', async () => {
    const mockedFn = client.tierAccounts.search = jest.fn();
    const dir = new Directory(client);
    await dir.searchTierAccounts({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({field: 'value'});
  });
  it('searchAssets invokes search on assets endpoint', async () => {
    const mockedFn = client.assets.search = jest.fn();
    const dir = new Directory(client);
    await dir.searchAssets({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({ field: 'value'});
  });
  it('searchTierConfigurations invokes search on tierConfigs endpoint', async () => {
    const mockedFn = client.tierConfigs.search = jest.fn();
    const dir = new Directory(client);
    await dir.searchTierConfigurations({field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({field: 'value'});
  });
  it('getTierAccount invokes get on tier accounts endpoint', async () => {
    const mockedFn = client.tierAccounts.get = jest.fn();
    const dir = new Directory(client);
    await dir.getTierAccount('TA-000');
    expect(mockedFn).toHaveBeenCalledWith('TA-000');
  });
  it('getAssetsByProductIdExternalId invokes search on tier accounts endpoint', async () => {
    const mockedFn = client.assets.search = jest.fn();
    const dir = new Directory(client);
    await dir.getAssetsByProductIdExternalId('PRD-000', 'ext_id');
    expect(mockedFn).toHaveBeenCalledWith({
      external_id: 'ext_id',
      'product.id': 'PRD-000',
    });
  });
  it('createTierAccountRequest invokes create on tier account requests endpoint', async () => {
    const mockedFn = client.tierAccountRequests.create = jest.fn();
    const dir = new Directory(client);
    await dir.createTierAccountRequest({});
    expect(mockedFn).toHaveBeenCalledWith({});
  });
  it('searchTierAccountRequest invokes search on tier account requests endpoint', async () => {
    const mockedFn = client.tierAccountRequests.search = jest.fn();
    const dir = new Directory(client);
    await dir.searchTierAccountRequest({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({ field: 'value'});
  });
  it('getTierAccountRequest invokes get on tier account requests endpoint', async () => {
    const mockedFn = client.tierAccountRequests.get = jest.fn();
    const dir = new Directory(client);
    await dir.getTierAccountRequest('TAR-0000');
    expect(mockedFn).toHaveBeenCalledWith('TAR-0000');
  });
  it('acceptTierAccountRequest invokes accept on tier account requests endpoint', async () => {
    const mockedFn = client.tierAccountRequests.accept = jest.fn();
    const dir = new Directory(client);
    await dir.acceptTierAccountRequest('TAR-0000');
    expect(mockedFn).toHaveBeenCalledWith('TAR-0000');
  });
  it('ignoreTierAccountRequest invokes get on tier account requests endpoint', async () => {
    const mockedFn = client.tierAccountRequests.ignore = jest.fn();
    const dir = new Directory(client);
    await dir.ignoreTierAccountRequest('TAR-0000');
    expect(mockedFn).toHaveBeenCalledWith('TAR-0000');
  });
  it('getTierAccountVersion invokes get on tier account requests endpoint', async () => {
    const accVersionResource = client.tierAccounts.versions('TAR-0000');
    const mockedFn = accVersionResource.get = jest.fn();
    const dir = new Directory(client);
    await dir.getTierAccountVersion('TAR-0000', 1);
    expect(mockedFn).toHaveBeenCalledWith(1);
  });
});