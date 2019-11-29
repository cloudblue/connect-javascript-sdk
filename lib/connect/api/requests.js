/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');

/**
* The RequestService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class RequestService extends BaseService {
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
    const url = this.addParams('/requests', params);
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return await response.json();
  }
  /**
   * Reject a request.
   * 
   * @param  {string}  id  Id of the purchase request.
   * @param  {sring} reason Description of the reason of reject
   * 
   * @return {*}    [Check return type]
   */
  async rejectRequest(id, reason) {
    const url = `/requests/${id}/fail`;
    const options = {
      method: 'POST',
      body: {
        reason: reason
      }
    }
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return await response.json();
  }
}


module.exports = RequestService;
