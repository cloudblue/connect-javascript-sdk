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
   * Get a list of tier accounts.
   *
   * @return {Array} Returns an Array of the TierAccount object.
   */
  async list() {
    const response = await this.fetch('/tier/accounts');
    await this.checkResponse(response);
    return response.json();
  }
}

module.exports = TierAccountService;
