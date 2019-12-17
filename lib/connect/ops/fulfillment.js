/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');

/**
 * The Fullfilment class exposes specialized methods to help
 * developers to achive common use cases for the fulfillment
 * workflow.
 */
class Fulfillment {
  /**
   * Create an instance of the Fulfillment class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {Fulfillment} An instance of the Fulfillment class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Return a list of at most **limit** ``Request`` objects that match the provided
   * filters.
   * If no filter is passed, a page of Request in 'pending' status is returned.
   *
   * See the :js:class:`RequestService.list method <requests.RequestService.list>` for
   * further information about the filters object.
   *
   * @param  {Object} filters      A filter object.
   * @param  {number} [limit=100]  The maximum number of records to return.
   * @param  {number} [offset=0]   The offset from which to start to include records.
   * @return {Array} An array of Request objects that match the provided filters.
   */
  async listRequests(filters, limit, offset) {
    return this._client.requests.list(filters, limit, offset);
  }

  /**
   * Change the status of the ``Request`` object to 'fail'.
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {string}   reason The reason for which the Request has been failed.
   *
   * @return {Object} The updated Request object.
   */
  async failRequest(id, reason) {
    return this._client.requests.fail(id, reason);
  }

  /**
   * Update a ``Request`` object.
   * Only a partial update can be performed on a ``Request`` object:
   * developers can update only the **note** attribute of the Request and/or
   * the asset parameters **value** or **value_error** attributes.
   *
   * @example
   * {
   *    note: 'Test Note',
   *    asset: {
   *      params: [
   *        {
   *          id: 'param_a', // id is required
   *          value: 'value_of_param_a',
   *          value_error: 'This address is already used. Try another.'
   *        }
   *      ]
   *    }
   * }
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {Object}  request The body of the request.
   *
   * @return {Object} The updated ``Request`` object.
   */
  async updateRequest(id, request) {
    return this._client.requests.update(id, request);
  }

  async createRequest(request) {
    return this._client.requests.create(request);
  }

  async updateRequestParameters(id, params, note) {
    const request = {
      asset: {
        params,
      },
    };
    if (note !== undefined) {
      request.note = note;
    }
    return this.updateRequest(id, request);
  }

  async inquireRequest(id, request, params, note) {
    await this.updateRequestParameters(id, params, note);
    return this._client.requests.inquire(id, request);
  }

  async inquireRequestWithTemplate(id, templateId, params, note) {
    return this.inquireRequest(id, { template_id: templateId }, params, note);
  }

  async approveRequest(id, request) {
    return this._client.requests.approve(id, request);
  }

  async approveRequestWithTemplate(id, templateId) {
    return this.approveRequest(id, { template_id: templateId });
  }
}

module.exports = Fulfillment;
