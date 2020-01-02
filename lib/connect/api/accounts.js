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
  constructor(client) {
    super(client, '/accounts');
  }
}

module.exports = AccountService;
