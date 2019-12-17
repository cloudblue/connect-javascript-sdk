/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
 * The Fullfilment class exposes specialized methods to help
 * developers to achive common use cases for the fulfillment
 * workflow.
 */
class Fulfillment {
  /**
   * Creates an instance of the Fulfillment class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {Fulfillment} An instance of the Fulfillment class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of at most **limit** ``Request`` objects that match the provided
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
   * Changes the status of the ``Request`` object to 'fail'.
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
   * Updates a ``Request`` object.
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

  /**
   * Creates a new ``Request`` object.
   *
   * @param {Object} request  The Request object to create.
   */
  async createRequest(request) {
    return this._client.requests.create(request);
  }

  /**
   * Updates the asset parameters of a Request object.
   *
   * @param   {string}  id      The unique identifier of the Request object.
   * @param   {Array}   params  Array of ``Parameter`` objects to update.
   * @param   {string}  note    An optional **note** for the Request.
   *
   * @return  {Object} The updated Request object.
   */
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

  /**
   * Updates the ``Request`` object to inquire the provider
   * for ordering parameter.
   * It updates the ``Parameter`` object **value_error** attribute
   * and set the status of the ``Request`` to 'inquire'.
   *
   * @example
   * // example of the params argument.
   * [
   *   {
   *      id: 'param_a', // id is required
   *      value_error: 'This address is already used. Try another.'
   *   }
   * ]
   *
   * @example
   * // request body using a template id
   * {
   *   template_id: 'TL-827-840-476'
   * }
   *
   * @example
   * // request body using an activation tile
   * {
   *   activation_tile: '<rendered text>'
   * }
   *
   *
   * @param   {string}  id       The unique identifier of the Request object.
   * @param   {Object}  request  The request body.
   * @param   {Array}   params   An array of ``Parameter`` objects to update.
   * @param   {string}  note     An optional 'note' attribute for the Request.
   *
   * @return  {Object} The updated ``Request`` object.
   */
  async inquireRequest(id, request, params, note) {
    await this.updateRequestParameters(id, params, note);
    return this._client.requests.inquire(id, request);
  }

  /**
   * Updates the ``Request`` object to inquire the provider
   * for ordering parameter using an activation template.
   * It updates the ``Parameter`` object **value_error** attribute
   * and set the status of the ``Request`` to 'inquire'.
   *
   * @param   {string}  id          The unique identifier of the Request object.
   * @param   {string}  templateId  The unique identifier of the ``Template`` object.
   * @param   {Array}   params      An array of ``Parameter`` objects to update.
   * @param   {string}  note        An optional 'note' attribute for the Request.
   *
   * @return  {Object} The updated ``Request`` object.
   */
  async inquireRequestWithTemplate(id, templateId, params, note) {
    return this.inquireRequest(id, { template_id: templateId }, params, note);
  }

  /**
   * Updates the ``Request`` and set its status to 'approved'.
   *
   * @example
   * // request body using a template id
   * {
   *   template_id: 'TL-827-840-476'
   * }
   *
   * @example
   * // request body using an activation tile
   * {
   *   activation_tile: '<rendered text>'
   * }
   *
   *
   * @param   {string}  id       The unique identifier of the Request object.
   * @param   {Object}  request  The request body.
   *
   * @return  {Object} The updated ``Request`` object.
   */
  async approveRequest(id, request) {
    return this._client.requests.approve(id, request);
  }

  /**
   * Updates the ``Request`` and set its status to 'approved'
   * using an activation template.
   *
   * @param   {string}  id         The unique identifier of the Request object.
   * @param   {string}  templateId The template id to use for ``Request`` approval.
   *
   * @return  {Object} The updated ``Request`` object.
   */
  async approveRequestWithTemplate(id, templateId) {
    return this.approveRequest(id, { template_id: templateId });
  }
}

module.exports = Fulfillment;
