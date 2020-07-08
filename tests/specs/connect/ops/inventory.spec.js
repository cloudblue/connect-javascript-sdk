const { ConnectClient, Inventory } = require('../../../../index');

describe('Inventory', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('getParametersByProduct invokes get on product parameters endpoint', async () => {
    const mockedFn = client.products.parameters('PRD-000').search = jest.fn();
    const inv = new Inventory(client);
    await inv.getParametersByProduct('PRD-000');
    expect(mockedFn).toHaveBeenCalled();
  });
  it('getAssetParametersForFulfillmentByProduct search parameters with scope=asset and phase=fulfillment', async () => {
    const mockedFn = client.products.parameters('PRD-000').search = jest.fn();
    const inv = new Inventory(client);
    await inv.getAssetParametersForFulfillmentByProduct('PRD-000');
    expect(mockedFn).toHaveBeenCalledWith({
      scope: 'asset',
      phase: 'fulfillment',
    });
  });
  it('getParametersByProduct invokes search on the product parameters endpoint', async () => {
    const mockedFn = client.products.parameters('PRD-000').search = jest.fn();
    const inv = new Inventory(client);
    await inv.getParametersByProduct('PRD-000');
    expect(mockedFn).toHaveBeenCalled();
  });
  it('getProductTemplates invokes getTemplates on products endpoint', async () => {
    const mockedFn = client.products.getTemplates = jest.fn();
    const inv = new Inventory(client);
    await inv.getProductTemplates('PRD-000');
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
  });
  it('getProductActionLink invokes link on product actions endpoint', async () => {
    const prodActionResource = client.products.actions('PRD-000');
    const mockedFn = prodActionResource.link = jest.fn();
    const inv = new Inventory(client);
    await inv.getProductActionLink('PRD-000', 'sso_action', 'AS-000');
    expect(mockedFn).toHaveBeenCalledWith('sso_action', 'AS-000');
  });
  it('getProductAssetTemplates invokes this.getProductTemplates and filter by scope=asset', async () => {
    const inv = new Inventory(client);
    inv.getProductTemplates = jest.fn();
    inv.getProductTemplates.mockImplementation(id => [
      {
        id: 'TL-000',
        scope: 'asset',
      },
      {
        id: 'TL-001',
        scope: 'tier1',
      },
      {
        id: 'TL-002',
        scope: 'tier2',
      }
    ]);
    await expect(inv.getProductAssetTemplates('PRD-000')).resolves.toEqual([
      {
        id: 'TL-000',
        scope: 'asset',
      }      
    ]);
    expect(inv.getProductTemplates).toHaveBeenCalledWith('PRD-000');
  });
  it('searchProductParameters invokes search on the product parameters endpoint', async () => {
    const mockedFn = client.products.parameters('PRD-000').search = jest.fn();
    const inv = new Inventory(client);
    const query = {
      scope: 'asset',
      phase: 'ordering',
    };
    await inv.searchProductParameters('PRD-000', query)
    expect(mockedFn).toHaveBeenCalledWith(query);
  });
});