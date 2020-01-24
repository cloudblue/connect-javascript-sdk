/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
/* eslint-disable max-classes-per-file */

const GenericResource = require('./base');

class AccountUserResource extends GenericResource {}

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

  /**
   * Returns an instance of the ``AccountUserResorce``.
   *
   * @param   {string}  id  The account unique identifier.
   *
   * @return  {AccountUserResource}  An instance of ``AccountUserResource``.
   */
  users(id) {
    return new AccountUserResource(this._client, `${this.baseUri}/${id}/users`);
  }
}

module.exports = AccountResource;
