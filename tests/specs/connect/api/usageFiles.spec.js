/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const UsageFileResource = require('../../../../lib/connect/api/usageFiles');
const { ConnectClient } = require('../../../../index');

const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('UsageFileResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
 
  it('returns the category of the usage file', async () => {
    const usageFile = new UsageFileResource(client);
    const attachment = [{ id: 'UF-000', name: 'test usage file category' }];
    fetch.mockResponseOnce(JSON.stringify(attachment), { status: 200, headers: contentTypeJson });
    await expect(usageFile.categories('UF-000').search()).resolves.toEqual(attachment);
    expect(fetch).toBeCalledWith('https://localhost/usage/files/UF-000/categories', expect.anything());
  });

  it('accept usage file', async () => {
    const req = new UsageFileResource(client);
    const response =  {
      id: 'UF-0000',
      status: 'accepted',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers:  contentTypeJson });
    const reqBody = {
      acceptance_note: 'accepted',
    };
    await expect(req.accept('UF-0000', 'accepted')).resolves.toEqual(response);
    expect(fetch).toBeCalledWith('https://localhost/usage/files/UF-0000/accept', {
      method: 'POST',
      headers: expect.anything(),
      body: JSON.stringify(reqBody),
    });    
  });

  it.each([
    ['approveAll', 'approve-all', 'PUT'],
    ['close', 'close', 'POST'],
    ['delete', 'delete', 'POST'],
    ['reprocess', 'reprocess', 'POST'],
    ['submit', 'submit', 'POST'],
  ])('performs the %s action', async (action, request, act) => {
    const req = new UsageFileResource(client);
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    const method = req[action].bind(req);
    await method('UF-0000');
    expect(fetch).toBeCalledWith(`https://localhost/usage/files/UF-0000/${request}`, {
      method: act,
      headers: expect.anything(),
    });    
  });

  it.each([
    ['reconciliation', 'reconFile', 'recon_file'],
    ['reject', 'rejectionNote', 'rejection_note'],
    ['upload', 'usageFile', 'usage_file'],
  ])('performs the %s action', async (action, fileFunc, fileField) => {
    const req = new UsageFileResource(client);
    const reqBody = ({[fileField]: fileFunc});
    const response =  {
      id: 'UF-0000',
    };
    fetch.mockResponseOnce(JSON.stringify(response), { status: 200, headers: contentTypeJson });
    const method = req[action].bind(req);
    await method('UF-0000', fileFunc);
    expect(fetch).toBeCalledWith(`https://localhost/usage/files/UF-0000/${action}`, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: expect.anything(),
    });    
  });
});
