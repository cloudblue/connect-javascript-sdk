const { ConnectClient, Inventory } = require('../../../../index');

describe('Inventory', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('getParametersByProduct invokes getParameters on products endpoint', async () => {
    const mockedFn = client.products.getParameters = jest.fn();
    const inv = new Inventory(client);
    await inv.getParametersByProduct('PRD-000');
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
  });
  it('getAssetParametersForFulfillmentByProduct invokes this.getParametersByProduct and filter results by scope=asset and phase=fulfillment', async () => {
    const mockedFn = client.products.getParameters = jest.fn();
    mockedFn.mockImplementation((id) => Promise.resolve([
      {
        id: 'asset_param1',
        scope: 'asset',
        phase: 'fulfillment',
      },
      {
        id: 'asset_param2',
        scope: 'other_scope',
        phase: 'fulfillment',
      },
      {
        id: 'asset_param3',
        scope: 'asset',
        phase: 'other_phase',
      }
    ]));
    const inv = new Inventory(client);
    await expect(inv.getAssetParametersForFulfillmentByProduct('PRD-000')).resolves.toEqual([
      {
        id: 'asset_param1',
        scope: 'asset',
        phase: 'fulfillment',
      }      
    ]);
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
  });
  it('getParametersByProduct invokes getParameters on products endpoint', async () => {
    const mockedFn = client.products.getParameters = jest.fn();
    const inv = new Inventory(client);
    await inv.getParametersByProduct('PRD-000');
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
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
});