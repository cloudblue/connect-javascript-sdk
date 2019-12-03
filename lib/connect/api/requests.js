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
      status__in: statuses.join(),
    };
    if (products) {
      params.product_id__in = products.join();
    }
    const url = this.addParams('/requests', params);
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
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
        reason,
      },
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * [updateRequestParameters description]
   *
   * @param   {string}  id      The unique identifier of the Request to update.
   * @param   {Array}  params   An array of parameter objects ({id, value}) to update for Request.
   * @param   {string} note     An optional note for the update operation.
   *
   * @return  {Object}          The updated Request object.
   */
  async updateRequestParameters(id, params, note) {
    const url = `/requests/${id}`;
    const options = {
      method: 'PUT',
      body: {
        asset: {
          params
        }
      },
    };
    if (note !== undefined) {
      options.body.note = note;
    }
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();    
  }

  /**
   * Approves a Request using an activation template.
   *
   * @param   {string}  id          Unique identifier of the Request.
   * @param   {string}  templateId  Unique identifier of the activation template to use.
   *
   * @return  {Object}              The approved request.
   */
  async approveWithTemplate(id, templateId) {
    const url = `/requests/${id}/approve`;
    const options = {
      method: 'POST',
      body: {
        template_id: templateId
      }
    }
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();  
  }
}


module.exports = RequestService;
