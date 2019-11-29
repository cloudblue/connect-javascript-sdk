/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const {addParams, checkResponse} = require('./utils');

/**
* The RequestService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class RequestService {
  /**
   * Creates a new instance of the RequestService class.
   *
   * @param   {AbstractHttpAdapter}  adapter  A function to makes the http call.
   *
   * @return  {RequestService}     An instance of the RequestService class.
   */
  constructor(adapter) {
    this.adapter = adapter;
  }
  /**
   * Get a list of purchase requests filtered by statuses and optionally products.
   * 
   * @return {Array} An Array of Request objects.
   */
  async list(statuses, products) {
    const params = {
      status__in: statuses.join()
    };
    if (products) {
      params.product_id__in = products.join();
    }
    const url = addParams('/requests', params);
    const response = await this.adapter.fetch(url);
    await checkResponse(response);
    return await response.json();
  }
    /**
     * Reject a request.
     * 
     * @param  {string}  id  Id of the purchase request.
     * @param  {sring} reason Description of the reason of reject
     * 
     * @return {Promise}    The Promise of the http call.
     */
    async rejectRequest(id, reason) {
      const url = `/requests/${id}/fail`;
      const options = {
        method: 'POST',
        body: {
          reason: reason
        }
      }
      const response = await this.adapter.fetch(url, options);
      await checkResponse(response);
      return await response.json();
    }
}


module.exports = RequestService;
