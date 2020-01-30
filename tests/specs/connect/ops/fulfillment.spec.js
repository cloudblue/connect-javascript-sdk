/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { ConnectClient, Fulfillment } = require('../../../../index');

describe('Fulfillment - Asset Requests', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchRequests invokes search on requests endpoint', async () => {
    const mockedFn = client.requests.search = jest.fn();
    const ff = new Fulfillment(client);
    await ff.searchRequests({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({ field: 'value'});
  });
  it('failRequest invokes fail on requests endpoint', async () => {
    const mockedFn = client.requests.fail = jest.fn();
    const ff = new Fulfillment(client);
    await ff.failRequest('PR-001', 'test reason');
    expect(mockedFn).toHaveBeenCalledWith('PR-001', 'test reason');
  });
  it('updateRequest invokes update on requests endpoint', async () => {
    const mockedFn = client.requests.update = jest.fn();
    const ff = new Fulfillment(client);
    await ff.updateRequest('PR-001', {});
    expect(mockedFn).toHaveBeenCalledWith('PR-001', {});
  });
  it('createRequest invokes create on requests endpoint', async () => {
    const mockedFn = client.requests.create = jest.fn();
    const ff = new Fulfillment(client);
    await ff.createRequest({});
    expect(mockedFn).toHaveBeenCalledWith({});
  });
  it('updateRequestParameters invokes update on requests endpoint', async () => {
    const mockedFn = client.requests.update = jest.fn();
    const ff = new Fulfillment(client);
    await ff.updateRequestParameters('PR-001', [{id: 'param_a', value: 'value_a'}], 'note');
    expect(mockedFn).toHaveBeenCalledWith('PR-001', { asset: { params: [{id: 'param_a', value: 'value_a'}]}, note: 'note' });
  });
  it('updateRequestParameters invokes update on requests endpoint without note', async () => {
    const mockedFn = client.requests.update = jest.fn();
    const ff = new Fulfillment(client);
    await ff.updateRequestParameters('PR-001', [{id: 'param_a', value: 'value_a'}]);
    expect(mockedFn).toHaveBeenCalledWith('PR-001', { asset: { params: [{id: 'param_a', value: 'value_a'}]} });
  });
  it('inquireRequest invokes update and inquire on requests endpoint', async () => {
    const mockedUpdateFn = client.requests.update = jest.fn();
    const mockedInquireFn = client.requests.inquire = jest.fn();
    const ff = new Fulfillment(client);
    await ff.inquireRequest('PR-001', { template_id: 'TL-000' }, [{id: 'param_a', value: 'value_a'}], 'note');
    expect(mockedUpdateFn).toHaveBeenCalledWith('PR-001', { asset: { params: [{id: 'param_a', value: 'value_a'}]}, note: 'note' });
    expect(mockedInquireFn).toHaveBeenCalledWith('PR-001', { template_id: 'TL-000' });
  });
  it('inquireRequestWithTemplate invokes this.inquireRequest', async () => {
    const mockedFn = Fulfillment.prototype.inquireRequest = jest.fn();
    const ff = new Fulfillment(client);
    await ff.inquireRequestWithTemplate('PR-001', 'TL-000', [{id: 'param_a', value: 'value_a'}], 'note');
    expect(mockedFn).toHaveBeenCalledWith('PR-001', { template_id: 'TL-000' }, [{id: 'param_a', value: 'value_a'}], 'note');
  });
  it('approveRequest invokes approve on requests endpoint', async () => {
    const mockedFn = client.requests.approve = jest.fn();
    const ff = new Fulfillment(client);
    await ff.approveRequest('PR-001', { template_id: 'TL-000' });
    expect(mockedFn).toHaveBeenCalledWith('PR-001', { template_id: 'TL-000' });
  });
  it('approveRequestWithTemplate invokes this.approveRequest', async () => {
    const mockedFn = Fulfillment.prototype.approveRequest = jest.fn();
    const ff = new Fulfillment(client);
    await ff.approveRequestWithTemplate('PR-001', 'TL-000');
    expect(mockedFn).toHaveBeenCalledWith('PR-001', { template_id: 'TL-000' });
  });
  it('pendingRequest invokes pending on requests endpoint', async () => {
    const mockedFn = client.requests.pending = jest.fn();
    const ff = new Fulfillment(client);
    await ff.pendingRequest('PR-001');
    expect(mockedFn).toHaveBeenCalledWith('PR-001');
  });
  it('getRequest invokes get on requests endpoint', async () => {
    const mockedFn = client.requests.get = jest.fn();
    const ff = new Fulfillment(client);
    await ff.getRequest('PR-001');
    expect(mockedFn).toHaveBeenCalledWith('PR-001');
  });
});

// tier config requests

describe('Fulfillment - Tier Config Requests', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchTierConfigRequests invokes search on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.search = jest.fn();
    const ff = new Fulfillment(client);
    await ff.searchTierConfigRequests({ field: 'value'});
    expect(mockedFn).toHaveBeenCalledWith({ field: 'value'});
  });
  it('failTierConfigRequest invokes fail on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.fail = jest.fn();
    const ff = new Fulfillment(client);
    await ff.failTierConfigRequest('TCR-001', 'test reason');
    expect(mockedFn).toHaveBeenCalledWith('TCR-001', 'test reason');
  });
  it('createTierConfigRequest invokes create on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.create = jest.fn();
    const ff = new Fulfillment(client);
    await ff.createTierConfigRequest({});
    expect(mockedFn).toHaveBeenCalledWith({});
  });
  it('updateTierConfigRequestParameters invokes update on requests endpoint', async () => {
    const mockedFn = client.tierConfigRequests.update = jest.fn();
    const ff = new Fulfillment(client);
    await ff.updateTierConfigRequestParameters('TCR-001', [{id: 'param_a', value: 'value_a'}], 'note');
    expect(mockedFn).toHaveBeenCalledWith('TCR-001', { params: [{id: 'param_a', value: 'value_a'}], notes: 'note' });
  });
  it('updateTierConfigRequestParameters invokes update on requests endpoint without note', async () => {
    const mockedFn = client.tierConfigRequests.update = jest.fn();
    const ff = new Fulfillment(client);
    await ff.updateTierConfigRequestParameters('TCR-001', [{id: 'param_a', value: 'value_a'}]);
    expect(mockedFn).toHaveBeenCalledWith('TCR-001', { params: [{id: 'param_a', value: 'value_a'}] });
  });
  it('inquireTierConfigRequest invokes update and inquire on TCR endpoint', async () => {
    const mockedUpdateFn = client.tierConfigRequests.update = jest.fn();
    const mockedInquireFn = client.tierConfigRequests.inquire = jest.fn();
    const ff = new Fulfillment(client);
    await ff.inquireTierConfigRequest('TCR-001', [{id: 'param_a', value: 'value_a'}], 'note');
    expect(mockedUpdateFn).toHaveBeenCalledWith('TCR-001', { params: [{id: 'param_a', value: 'value_a'}], notes: 'note' });
    expect(mockedInquireFn).toHaveBeenCalledWith('TCR-001');
  });
  it('approveTierConfigRequest invokes approve on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.approve = jest.fn();
    const ff = new Fulfillment(client);
    await ff.approveTierConfigRequest('TCR-001', { template: { id: 'TL-000' } });
    expect(mockedFn).toHaveBeenCalledWith('TCR-001', { template: { id: 'TL-000' } });
  });
  it('approveTierConfigRequestWithTemplate invokes this.approveTierConfigRequest', async () => {
    const mockedFn = Fulfillment.prototype.approveTierConfigRequest = jest.fn();
    const ff = new Fulfillment(client);
    await ff.approveTierConfigRequestWithTemplate('TCR-001', 'TL-000');
    expect(mockedFn).toHaveBeenCalledWith('TCR-001', { template: { id: 'TL-000' } });
  });
  it('pendingTierConfigRequest invokes pending on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.pending = jest.fn();
    const ff = new Fulfillment(client);
    await ff.pendingTierConfigRequest('TCR-001');
    expect(mockedFn).toHaveBeenCalledWith('TCR-001');
  });
  it('getTierConfigRequest invokes get on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.get = jest.fn();
    const ff = new Fulfillment(client);
    await ff.getTierConfigRequest('TCR-001');
    expect(mockedFn).toHaveBeenCalledWith('TCR-001');
  });
  it('createUpdateTierConfigRequest invokes create on TCR endpoint', async () => {
    const mockedFn = client.tierConfigRequests.create = jest.fn();
    const ff = new Fulfillment(client);
    await ff.createUpdateTierConfigRequest('TC-001', [{id: 'param_a', value: 'value_a'}]);
    expect(mockedFn).toHaveBeenCalledWith({configuration: { id: 'TC-001' }, params: [{id: 'param_a', value: 'value_a'}] });
  });


});
describe('Fulfillment - Others', () => {
  let client;

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('getConnectionIdByProductAndHub invokes getConnections on products endpoint', async () => {
    const mockedFn = client.products.getConnections = jest.fn();
    mockedFn.mockImplementation(async (productId) => {
      return Promise.resolve([
        {
          id: 'CT-000',
          hub: {
            id: 'HB-000'
          }
        },
        {
          id: 'CT-001',
          hub: {
            id: 'HB-001'
          }
        },        
      ])
    });
    const ff = new Fulfillment(client);
    await expect(ff.getConnectionIdByProductAndHub('PRD-000', 'HB-000')).resolves.toEqual('CT-000');
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
  });
  it('getConnectionIdByProductAndHub returns null if (hub, product) does not exists', async () => {
    const mockedFn = client.products.getConnections = jest.fn();
    mockedFn.mockImplementation(async (productId) => {
      return Promise.resolve([
        {
          id: 'CT-000',
          hub: {
            id: 'HB-000'
          }
        },
        {
          id: 'CT-001',
          hub: {
            id: 'HB-001'
          }
        },        
      ])
    });
    const ff = new Fulfillment(client);
    await expect(ff.getConnectionIdByProductAndHub('PRD-000', 'HB-003')).resolves.toBeNull();
    expect(mockedFn).toHaveBeenCalledWith('PRD-000');
  });
});

