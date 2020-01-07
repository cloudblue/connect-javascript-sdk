/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');

/**
 * The AccountService class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class AccountService extends BaseService {
  /**
   * Creates a new instance of the ``AccountService`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {AccountService}  An instance of the ``AccountService`` class.
   */
  constructor(client) {
    super(client, '/accounts');
  }
}

module.exports = AccountService;
