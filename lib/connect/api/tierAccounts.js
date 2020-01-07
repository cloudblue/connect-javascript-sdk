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
class TierAccountService extends BaseService {
  /**
   * Creates a new instance of the ``TierAccountService`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {TierAccountService}  An instance of the ``TierAccountService`` class.
   */
  constructor(client) {
    super(client, '/tier/accounts');
  }
}

module.exports = TierAccountService;
