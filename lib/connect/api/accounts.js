/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

class AccountService {
    constructor(request) {
        this.request = request;
    }
    list() {
        const options = {
            url: '/accounts'
        }
        return this.request(options);
    }
  }
  
  
  module.exports = AccountService;