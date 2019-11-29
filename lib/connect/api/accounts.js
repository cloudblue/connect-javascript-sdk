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
     * Get a list of accounts based on the api key ownership.
     * 
     * @return {Array} Returns an Array of the Account object.
     */
    async list() {
        const response = await this.fetch('/accounts');
        await this.checkResponse(response);
        const data = await response.json();
        return data;
    }
}

module.exports = AccountService;
