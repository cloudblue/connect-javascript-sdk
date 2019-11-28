/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
 * The AccountService class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class AccountService {
    /**
     * Creates a new instance of the AccountService class.
     *
     * @param   {Function}  request  A function to makes the http call.
     *
     * @return  {AccountService}     An instance of the AccountService class.
     */
    constructor(request) {
        this.request = request;
    }
    /**
     * Get a list of accounts based on the api key ownership.
     * 
     * @return {Promise}    The Promise of the http call.
     */
    list() {
        const options = {
            url: '/accounts'
        }
        return this.request(options);
    }
}

module.exports = AccountService;
