/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const ProductResource = require('../../../../lib/connect/api/products');
const { ConnectClient } = require('../../../../index');

const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('ProductResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('returns an action link for an asset', async () => {
    const prod = new ProductResource(client);
    const link = { link: 'http://example.com' };
    fetch.mockResponseOnce(JSON.stringify(link), { status: 200, headers: contentTypeJson });
    await expect(prod.actions('PRD-000').link('sso_action', 'AS-0000')).resolves.toEqual(link);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/actions/sso_action/actionLink?asset_id=AS-0000', expect.anything());
  });
  it('returns a list of versions for a product', async () => {
    const prod = new ProductResource(client);
    const versions = [{ id: 'PRD-000', name: 'test product' }];
    fetch.mockResponseOnce(JSON.stringify(versions), { status: 200, headers: contentTypeJson });
    await expect(prod.versions('PRD-000').search()).resolves.toEqual(versions);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/versions', expect.anything());
  });
  it('returns a list of actions for a specific version of a product', async () => {
    const prod = new ProductResource(client);
    const actions = [{ id: 'sso_action', title: 'test action' }];
    fetch.mockResponseOnce(JSON.stringify(actions), { status: 200, headers: contentTypeJson });
    await expect(prod.versions('PRD-000').actions('1').search()).resolves.toEqual(actions);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/versions/1/actions', expect.anything());
  });
  it('returns a list of product configurations for a product', async () => {
    const prod = new ProductResource(client);
    const configs = [{ value: 'test_val', parameter: { id: 'test_param', title: 'test parameter' } }];
    fetch.mockResponseOnce(JSON.stringify(configs), { status: 200, headers: contentTypeJson });
    await expect(prod.configurations('PRD-000').search()).resolves.toEqual(configs);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/configurations', expect.anything());
  });
  it('returns a list of product usage rules for a product', async () => {
    const prod = new ProductResource(client);
    const test = [{ id: 'PRD-000', name: 'test product' }];
    fetch.mockResponseOnce(JSON.stringify(test), { status: 200, headers: contentTypeJson });
    await expect(prod.usageRules('PRD-000').search()).resolves.toEqual(test);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/usage/rules', expect.anything());  });
  it.each([
    ['templates', [{ id: 'TL-000', title: 'test template', body: 'template body' }]],
    ['parameters', [{ id: 'test_param', title: 'test parameter' }]],
    ['items', [{ id: 'PRD-000-0001', display_name: 'test product', description: 'Awesome product' }]],
    ['connections', [{ id: 'CT-0000', type: 'test', status: 'approved' }]]
  ])('returns a list of %s for a product', async (objType, respBody) => {
    const prod = new ProductResource(client);
    fetch.mockResponseOnce(JSON.stringify(respBody), { status: 200, headers: contentTypeJson });
    const methodName = `get${capitalize(objType)}`;
    const method = prod[methodName].bind(prod);
    await expect(method('PRD-000')).resolves.toEqual(respBody);
    expect(fetch).toBeCalledWith(`https://localhost/products/PRD-000/${objType}`, expect.anything());
  });
  it('returns a list of parameters for a product', async () => {
    const prod = new ProductResource(client);
    const parameters = [{ id: 'PRM-000-000-000-0000', title: 'test parameter' }];
    fetch.mockResponseOnce(JSON.stringify(parameters), { status: 200, headers: contentTypeJson });
    await expect(prod.parameters('PRD-000').search()).resolves.toEqual(parameters);
    expect(fetch).toBeCalledWith('https://localhost/products/PRD-000/parameters', expect.anything());
  });
});
