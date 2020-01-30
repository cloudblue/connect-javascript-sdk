/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const AccountResource = require('../../../../lib/connect/api/accounts');
const { ConnectClient } = require('../../../../index');

describe('AccountResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('returns a list of users that belongs to an account', async () => {
    const acc = new AccountResource(client);
    const users = [
      {
        id: 'UR-001',
        name: 'Test user',
        email: 'test@example.com'
      }
    ]
    fetch.mockResponseOnce(JSON.stringify(users), { status: 200, headers: contentTypeJson });
    await expect(acc.users('VA-001').search()).resolves.toEqual(users);
    expect(fetch).toBeCalledWith('https://localhost/accounts/VA-001/users', expect.anything());
  });
});
