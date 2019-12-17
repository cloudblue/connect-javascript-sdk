/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');

const { addFilterParam } = require('./utils');

/**
* The RequestService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class RequestService extends BaseService {
  /* eslint-disable max-len */
  /**
   * Get a list of requests that match all the filter values provided as input.
   * Some fields accept an array of values (search with the `in` operator).
   *
   * @param  {Object}       filter                               A filter object as described below.
   *
   * @param  {string|Array} filter.type                          The request type (purchase|change|suspend|resume|renew|cancel).
   * @param  {string|Array} filter.status                        The status of the request (pending|inquiring|failed|approved).
   * @param  {string|Array} filter.id                            The id of the request.
   * @param  {string|Array} filter.assetId                       The id of the asset that belongs to the request.
   * @param  {string|Array} filter.assetProductId                The id of the product that belongs to asset of the request.
   * @param  {string|Array} filter.assetProductName              The name of the product that belongs to asset of the request (exact match case-insensitive).
   * @param  {string|Array} filter.assetConnectionType           The type of the connection.
   * @param  {string|Array} filter.assetConnectionHubId          The id of the hub involved in the asset connection.
   * @param  {string|Array} filter.assetConnectionHubName        The name of the hub involved in the asset connection.
   * @param  {string|Array} filter.assetConnectionProviderId     The id of the provider involved in the asset connection.
   * @param  {string|Array} filter.assetConnectionProviderName   The name of the provider involved in the asset connection.
   * @param  {string|Array} filter.assetConnectionVendorId       The id of the vendor involved in the asset connection.
   * @param  {string|Array} filter.assetConnectionVendorName     The name of the vendor involved in the asset connection.
   * @param  {string} filter.assetTiersCustomerId                The id of the customer account for this asset.
   * @param  {string} filter.assetTiersTier1Id                   The id of T1 account for this asset.
   * @param  {number} [limit=100]                                The maximum number of records to return.
   * @param  {number} [offset=100]                               The offset from which to start to include records.
   * @return {Array} An array of Request objects that match the provided filters.
   */
  /* eslint-enable max-len */
  async list({
    type,
    status,
    id,
    assetId,
    assetProductId,
    assetProductName,
    assetConnectionType,
    assetConnectionHubId,
    assetConnectionHubName,
    assetConnectionProviderId,
    assetConnectionProviderName,
    assetConnectionVendorId,
    assetConnectionVendorName,
    assetTiersCustomerId,
    assetTiersTier1Id,
    assetTiersTier2Id,
  }, limit = 100, offset = 0) {
    const params = { limit, offset };
    addFilterParam(params, 'type', type);
    addFilterParam(params, 'status', status);
    addFilterParam(params, 'id', id);
    addFilterParam(params, 'asset.id', assetId);
    addFilterParam(params, 'asset.product.id', assetProductId);
    addFilterParam(params, 'asset.product.name', assetProductName);
    addFilterParam(params, 'asset.connection.type', assetConnectionType);
    addFilterParam(params, 'asset.connection.hub.id', assetConnectionHubId);
    addFilterParam(params, 'asset.connection.hub.name', assetConnectionHubName);
    addFilterParam(params, 'asset.connection.provider.id', assetConnectionProviderId);
    addFilterParam(params, 'asset.connection.provider.name', assetConnectionProviderName);
    addFilterParam(params, 'asset.connection.vendor.id', assetConnectionVendorId);
    addFilterParam(params, 'asset.connection.vendor.name', assetConnectionVendorName);
    addFilterParam(params, 'asset.tiers.customer.id', assetTiersCustomerId);
    addFilterParam(params, 'asset.tiers.tier1.id', assetTiersTier1Id);
    addFilterParam(params, 'asset.tiers.tier2.id', assetTiersTier2Id);

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
   * Set Inquire a request.
   *
   * @param  {string}  id     Id of the purchase request.
   * @param  {sring} reason    Description of the reason of inquire
   * @param  {sring} templateId   Activation Template ID
   * @param   {Array}  params   An array of parameter objects ({id, value}) to update for Request.
   *
   * @return {*}    [Check return type]£
   */
  async inquireRequest(id, reason, templateId, params) {
    await this.updateRequestParameters(id, params, reason);
    const url = `/requests/${id}/inquire`;
    const options = {
      method: 'POST',
      body: {
        template_id: templateId,
      },
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Update fields of the root of Request
   *
   * @param   {string}  id      The unique identifier of the Request to update.
   * @param   {Array}  params   An array of parameter objects to update for the root of Request.
   *
   * @return  {Object}          The updated Request object.
   */
  async updateRequest(id, request) {
    const url = `/requests/${id}`;
    const options = {
      method: 'PUT',
      body: request,
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
          params,
        },
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
        template_id: templateId,
      },
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Creates a new Request.
   *
   * @param   {Object}  req  The Request to create.
   *
   * @return  {Object}       A newly created Request (partial).
   */
  async create(req) {
    const url = '/requests';
    const options = {
      method: 'POST',
      body: req,
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }
}


module.exports = RequestService;
