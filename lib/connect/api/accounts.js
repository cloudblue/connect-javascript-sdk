/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The AccountResource class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class AccountResource extends GenericResource {
  /**
   * Creates a new instance of the ``AccountResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {AccountResource}  An instance of the ``AccountResource`` class.
   */
  constructor(client) {
    super(client, '/accounts');
  }
  /* eslint-disable max-len */
  users(id) { /* eslint-enable max-len */
    return new GenericResource(this._client, `${this.baseUri}/${id}/users`);
  }
}

module.exports = AccountResource;
