/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

class ProductService {
    constructor(request) {
        this.request = request;
    }
    list() {
        const options = {
            url: '/products',
            params: {
                status: 'published',
                latest: true
              }
          }
          return this.request(options);
    }
  }
  
  
  module.exports = ProductService;