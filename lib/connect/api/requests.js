/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const BaseService = require('./base');

const { rql2legacy } = require('./utils');

/**
* The RequestService class provides methods to access the ``Request``
* endpoint of the Cloud Blue Connect API.
*/
class RequestService extends BaseService {
  constructor(client) {
    super(client, '/requests');
  }

  // /**
  //  * Get a list of requests that match all the filter values provided as input.
  //  * Some fields accept an array of values (search with the `in` operator).
  //  *
  //  * @param  {Object}       filter                               A filter object as described below.
  //  *
  //  * @param  {string|Array} filter.type                          The request type (purchase|change|suspend|resume|renew|cancel).
  //  * @param  {string|Array} filter.status                        The status of the request (pending|inquiring|failed|approved).
  //  * @param  {string|Array} filter.id                            The id of the request.
  //  * @param  {string|Array} filter.assetId                       The id of the asset that belongs to the request.
  //  * @param  {string|Array} filter.assetProductId                The id of the product that belongs to asset of the request.
  //  * @param  {string|Array} filter.assetProductName              The name of the product that belongs to asset of the request (exact match case-insensitive).
  //  * @param  {string|Array} filter.assetConnectionType           The type of the connection.
  //  * @param  {string|Array} filter.assetConnectionHubId          The id of the hub involved in the asset connection.
  //  * @param  {string|Array} filter.assetConnectionHubName        The name of the hub involved in the asset connection.
  //  * @param  {string|Array} filter.assetConnectionProviderId     The id of the provider involved in the asset connection.
  //  * @param  {string|Array} filter.assetConnectionProviderName   The name of the provider involved in the asset connection.
  //  * @param  {string|Array} filter.assetConnectionVendorId       The id of the vendor involved in the asset connection.
  //  * @param  {string|Array} filter.assetConnectionVendorName     The name of the vendor involved in the asset connection.
  //  * @param  {string} filter.assetTiersCustomerId                The id of the customer account for this asset.
  //  * @param  {string} filter.assetTiersTier1Id                   The id of T1 account for this asset.
  //  * @param  {string|Array} orderBy                              The ordering criteria.
  //  * @param  {number} [limit=100]                                The maximum number of records to return.
  //  * @param  {number} [offset=0]                                 The offset from which to start to include records.
  //  * @return {Array} An array of Request objects that match the provided filters.
  //  */
  // async list({
  //   type,
  //   status,
  //   id,
  //   assetId,
  //   assetProductId,
  //   assetProductName,
  //   assetConnectionType,
  //   assetConnectionHubId,
  //   assetConnectionHubName,
  //   assetConnectionProviderId,
  //   assetConnectionProviderName,
  //   assetConnectionVendorId,
  //   assetConnectionVendorName,
  //   assetTiersCustomerId,
  //   assetTiersTier1Id,
  //   assetTiersTier2Id,
  // }, orderBy, limit = 100, offset = 0) { /* eslint-enable max-len */
  //   const params = {};

  //   addFilterParam(params, 'type', type);
  //   addFilterParam(params, 'status', status);
  //   addFilterParam(params, 'id', id);
  //   addFilterParam(params, 'asset.id', assetId);
  //   addFilterParam(params, 'asset.product.id', assetProductId);
  //   addFilterParam(params, 'asset.product.name', assetProductName);
  //   addFilterParam(params, 'asset.connection.type', assetConnectionType);
  //   addFilterParam(params, 'asset.connection.hub.id', assetConnectionHubId);
  //   addFilterParam(params, 'asset.connection.hub.name', assetConnectionHubName);
  //   addFilterParam(params, 'asset.connection.provider.id', assetConnectionProviderId);
  //   addFilterParam(params, 'asset.connection.provider.name', assetConnectionProviderName);
  //   addFilterParam(params, 'asset.connection.vendor.id', assetConnectionVendorId);
  //   addFilterParam(params, 'asset.connection.vendor.name', assetConnectionVendorName);
  //   addFilterParam(params, 'asset.tiers.customer.id', assetTiersCustomerId);
  //   addFilterParam(params, 'asset.tiers.tier1.id', assetTiersTier1Id);
  //   addFilterParam(params, 'asset.tiers.tier2.id', assetTiersTier2Id);


  //   let url = this.appendToQuerystring(this.baseUri, params);
  //   url = this.addSorting(url, orderBy);
  //   url = this.addPaging(url, limit, offset);
  //   const response = await this.fetch(url);
  //   return response.json();
  // }

  addQuery(url, query) {
    return this.appendToQuerystring(url, rql2legacy(query));
  }

  /**
   * Change the status of a ``Request`` to fail.
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {string}   reason The reason for which the Request has been failed.
   *
   * @return {Object} The updated Request object.
   */
  async fail(id, reason) {
    const url = `/requests/${id}/fail`;
    const options = {
      method: 'POST',
      body: {
        reason,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to inquire.
   * To change the status of the Request to inquire you must provide
   * either a template id or a template tile.
   *
   *
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
   * @param  {string}   id      The unique identifier of the Request object.
   * @param  {Object}   request The request body.
   *
   * @return {Object} The updated Request object.
   */

  async inquire(id, request) {
    const url = `/requests/${id}/inquire`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to approved.
   * To change the status of the Request to approved you must provide
   * either a template id or a template tile.
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
   * @param  {string}   id      The unique identifier of the Request object.
   * @param  {Object}   request The request body.
   *
   * @return {Object} The updated Request object.
   */
  async approve(id, request) {
    const url = `/requests/${id}/approve`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to pending.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @return {Object} The updated Request object.
   */
  async pend(id) {
    const url = `/requests/${id}/pend`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}


module.exports = RequestService;
