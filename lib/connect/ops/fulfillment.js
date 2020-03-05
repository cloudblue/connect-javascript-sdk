/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { filter } = require('ramda');

/**
 * The Fullfilment class exposes specialized methods to help
 * developers to achive common use cases for the fulfillment
 * workflow.
 *
 * @category Operations
 */
class Fulfillment {
  /**
   * Creates an instance of the Fulfillment class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {Fulfillment} An instance of the Fulfillment class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of *Request* objects that match the provided
   * filters.
   * If no filter is passed, a page of Request in 'pending' status is returned.
   *
   *
   * @param   {object} query    A RQL query.
   * @returns {Array}           An array of Request objects that match the provided filters.
   */
  async searchRequests(query) {
    return this._client.requests.search(query);
  }

  /**
   * Changes the status of the *Request* object to 'fail'.
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {string}   reason The reason for which the Request has been failed.
   *
   * @returns {object} The updated Request object.
   */
  async failRequest(id, reason) {
    return this._client.requests.fail(id, reason);
  }

  /**
   * Updates a *Request* object.
   * Only a partial update can be performed on a *Request* object:
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
   * @param  {object}  request The body of the request.
   *
   * @returns {object} The updated *Request* object.
   */
  async updateRequest(id, request) {
    return this._client.requests.update(id, request);
  }

  /**
   * Creates a new *Request* object.
   *
   * @param {object} request  The Request object to create.
   */
  async createRequest(request) {
    return this._client.requests.create(request);
  }

  /**
   * Updates the asset parameters of a Request object.
   *
   * @param   {string}  id      The unique identifier of the Request object.
   * @param   {Array}   params  Array of *Parameter* objects to update.
   * @param   {string}  note    An optional **note** for the Request.
   *
   * @returns  {object} The updated Request object.
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
   * Updates the *Request* object to inquire the provider
   * for ordering parameter.
   * It updates the *Parameter* object **value_error** attribute
   * and set the status of the *Request* to 'inquire'.
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
   * @param   {object}  request  The request body.
   * @param   {Array}   params   An array of *Parameter* objects to update.
   * @param   {string}  note     An optional 'note' attribute for the Request.
   *
   * @returns  {object} The updated *Request* object.
   */
  async inquireRequest(id, request, params, note) {
    await this.updateRequestParameters(id, params, note);
    return this._client.requests.inquire(id, request);
  }

  /**
   * Updates the *Request* object to inquire the provider
   * for ordering parameter using an activation template.
   * It updates the *Parameter* object **value_error** attribute
   * and set the status of the *Request* to 'inquire'.
   *
   * @param   {string}  id          The unique identifier of the Request object.
   * @param   {string}  templateId  The unique identifier of the *Template* object.
   * @param   {Array}   params      An array of *Parameter* objects to update.
   * @param   {string}  note        An optional 'note' attribute for the Request.
   *
   * @returns  {object} The updated *Request* object.
   */
  async inquireRequestWithTemplate(id, templateId, params, note) {
    return this.inquireRequest(id, { template_id: templateId }, params, note);
  }

  /**
   * Updates the *Request* and set its status to 'approved'.
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
   * @param   {object}  request  The request body.
   *
   * @returns  {object} The updated *Request* object.
   */
  async approveRequest(id, request) {
    return this._client.requests.approve(id, request);
  }

  /**
   * Updates the *Request* and set its status to 'approved'
   * using an activation template.
   *
   * @param   {string}  id         The unique identifier of the Request object.
   * @param   {string}  templateId The template id to use for *Request* approval.
   *
   * @returns  {object} The updated *Request* object.
   */
  async approveRequestWithTemplate(id, templateId) {
    return this.approveRequest(id, { template_id: templateId });
  }

  /**
   * Updates the *Request* and set its status to 'pending'.
   *
   * @param   {string}  id         The unique identifier of the Request object.
   *
   * @returns  {object} The updated *Request* object.
   */
  async pendingRequest(id) {
    return this._client.requests.pending(id);
  }

  /**
   * Retrieve the *Request* object identified by its id.
   *
   * @param   {string}  id         The unique identifier of the Request object.
   *
   * @returns  {object} The *Request* object.
   */
  async getRequest(id) {
    return this._client.requests.get(id);
  }

  /**
   * Returns a list of at most **limit** *TierConfigurationRequest* objects
   * that match the provided filters.
   * If no filter is passed, a page of Request in 'pending' status is returned.
   *
   * for further information about the filters object.
   *
   * @param  {object} query    A RQL query.
   * @returns {Array} An array of TierConfigurationRequest objects that match the provided filters.
   */
  async searchTierConfigRequests(query) {
    return this._client.tierConfigRequests.search(query);
  }

  /**
   * Changes the status of the *TierConfigurationRequest* object to 'fail'.
   *
   * @param  {string}   id     The unique identifier of the TierConfigurationRequest object.
   * @param  {string}   reason The reason for which the TierConfigurationRequest has been failed.
   *
   */
  async failTierConfigRequest(id, reason) {
    return this._client.tierConfigRequests.fail(id, reason);
  }

  /**
   * Updates the *TierConfigurationRequest* and set its status to 'approved'.
   *
   * @example
   * // request body using a template id
   * {
   *   template: {
   *     id: 'TL-827-840-476'
   *   }
   * }
   *
   *
   * @param   {string}  id       The unique identifier of the Request object.
   * @param   {object}  request  The request body.
   *
   * @returns  {object} The rendered template.
   */
  async approveTierConfigRequest(id, request) {
    return this._client.tierConfigRequests.approve(id, request);
  }

  /**
   * Updates the *TierConfigurationRequest* and set its status to 'approved'
   * using an template.
   *
   * @param   {string}  id         The unique identifier of the TierConfigurationRequest object.
   * @param   {string}  templateId The template id to use for TierConfigurationRequest approval.
   *
   * @returns  {object} The rendered template.
   */
  async approveTierConfigRequestWithTemplate(id, templateId) {
    return this.approveTierConfigRequest(id, { template: { id: templateId } });
  }

  /**
   * Updates a *TierConfigurationRequest* object.
   * Only a partial update can be performed on a *TierConfigurationRequest* object:
   * developers can update only the **notew** attribute of the TierConfigurationRequest and/or
   * the config parameters **value** or **value_error** attributes.
   *
   * @example
   * {
   *    notes: 'Test Note',
   *    params: [
   *      {
   *        id: 'param_a', // id is required
   *        value: 'value_of_param_a',
   *        value_error: 'This address is already used. Try another.'
   *      }
   *    ]
   * }
   *
   * @param  {string}   id     The unique identifier of the TierConfigurationRequest object.
   * @param  {object}  request The body of the request.
   *
   * @returns {object} The updated *TierConfigurationRequest* object.
   */
  async updateTierConfigRequest(id, request) {
    return this._client.tierConfigRequests.update(id, request);
  }

  /**
   * Updates the parameters of a *TierConfigurationRequest* object.
   *
   * @param   {string}  id      The unique identifier of the TierConfigurationRequest object.
   * @param   {Array}   params  Array of *Parameter* objects to update.
   * @param   {string}  notes    An optional **notes** for the TierConfigurationRequest.
   *
   * @returns  {object} The updated Request object.
   */
  async updateTierConfigRequestParameters(id, params, notes) {
    const request = {
      params,
    };
    if (notes !== undefined) {
      request.notes = notes;
    }
    return this.updateTierConfigRequest(id, request);
  }

  /**
   * Creates a new *TierConfigurationRequest* object.
   *
   * @param {object} request  The TierConfigurationRequest object to create.
   */
  async createTierConfigRequest(request) {
    return this._client.tierConfigRequests.create(request);
  }


  /**
   * Creates a new *TierConfigurationRequest* object of type="update".
   *
   * @param {string} configId  The TierConfigurationRequest unique identifier.
   * @param {Array}  params    An array of parameters.
   */
  async createUpdateTierConfigRequest(configId, params) {
    return this.createTierConfigRequest({
      configuration: {
        id: configId,
      },
      params,
    });
  }

  /**
   * Updates the *TierConfigRequest* object to inquire the tier
   * for ordering parameter.
   * It updates the *Parameter* object **value_error** attribute
   * and set the status of the *TierConfigRequest* to 'inquire'.
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
   *
   * @param   {string}  id       The unique identifier of the Request object.
   * @param   {Array}   params   An array of *Parameter* objects to update.
   * @param   {string}  notes     An optional 'notes' attribute for the Request.
   *
   */
  async inquireTierConfigRequest(id, params, notes) {
    await this.updateTierConfigRequestParameters(id, params, notes);
    return this._client.tierConfigRequests.inquire(id);
  }

  /**
   * Updates the *TierConfigRequest* and set its status to 'pending'.
   *
   * @param   {string}  id         The unique identifier of the TierConfigRequest object.
   *
   * @returns  {object} The updated *TierConfigRequest* object.
   */
  async pendingTierConfigRequest(id) {
    return this._client.tierConfigRequests.pending(id);
  }

  /**
   * Retrieve the *TierConfigRequest* object identified by its id.
   *
   * @param   {string}  id         The unique identifier of the TierConfigRequest object.
   *
   * @returns  {object} The *TierConfigRequest* object.
   */
  async getTierConfigRequest(id) {
    return this._client.tierConfigRequests.get(id);
  }

  /**
   * Search a connection by a product and a hub and if found returns
   * the connection identifier otherwise returns null.
   *
   * @param   {string}  productId  The unique identifier of the Product.
   * @param   {string}  hubId      The unique identifier of the Hub.
   *
   * @returns  {string|null}  The Connection identifier or null.
   */
  async getConnectionIdByProductAndHub(productId, hubId) {
    const connections = await this._client.products.getConnections(productId);
    const connection = filter((conn) => conn.hub.id === hubId, connections);
    return connection.length === 1 ? connection[0].id : null;
  }
}

module.exports = Fulfillment;
