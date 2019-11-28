/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
* The RequestService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class RequestService {
  /**
   * Creates a new instance of the RequestService class.
   *
   * @param   {Function}  request  A function to makes the http call.
   *
   * @return  {RequestService}     An instance of the RequestService class.
   */
  constructor(request) {
    this.request = request;
  }
  /**
   * Get a list of purchase requests filtered by statuses and optionally products.
   * 
   * @return {Promise}    The Promise of the http call.
   */
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
