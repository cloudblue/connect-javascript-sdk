/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const checkResponse = require('./utils').checkResponse;

/**
 * The AccountService class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class AccountService {
    /**
     * Creates a new instance of the AccountService class.
     *
     * @param   {AbstractHttpAdapter}  adapter  The adapter to make the http request.
     *
     * @return  {AccountService}     An instance of the AccountService class.
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * Get a list of accounts based on the api key ownership.
     * 
     * @return {Promise}    The Promise of the http call.
     */
    async list() {
        const response = await this.adapter.fetch('/accounts');
        await checkResponse(response);
        const data = await response.json();
        return data;
    }
}

module.exports = AccountService;
