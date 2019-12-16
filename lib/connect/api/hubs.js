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
class HubService extends BaseService {
  /**
   * Get a list of tier accounts.
   *
   * @return {Array} Returns an Array of the Hub object.
   */
  async list() {
    const response = await this.fetch('/hubs');
    await this.checkResponse(response);
    return response.json();
  }
}

module.exports = HubService;
