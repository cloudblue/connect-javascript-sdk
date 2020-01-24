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
    expect(mockedFn).toHaveBeenCalledWith({ field: 'value'});
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
});