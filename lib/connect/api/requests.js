/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

class RequestService {
    constructor(request) {
        this.request = request;
    }
    list(statuses, products) {
        const options = {
            url: '/requests',
            params: {
              status__in: statuses.join()
            }
          }
          if (products) {
            options.params.product_id__in = products.join();
          }
          return this.request(options);
    }
}


module.exports = RequestService;