/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const AssetResource = require('../../../../lib/connect/api/assets');
const { ConnectClient } = require('../../../../index');

const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('AssetResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns a list of asset usage agregates for an asset', async () => {
    const asset = new AssetResource(client);
    const test = [{ id: 'AS-000', name: 'test product' }];
    fetch.mockResponseOnce(JSON.stringify(test), { status: 200, headers: contentTypeJson });
    await expect(asset.usageAgregates('AS-000').search()).resolves.toEqual(test);
    expect(fetch).toBeCalledWith('https://localhost/assets/AS-000/usage/agregates', expect.anything());  });
});
