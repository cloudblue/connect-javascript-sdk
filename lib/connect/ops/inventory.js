/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { filter } = require('ramda');

/**
 * The Inventory class exposes specialized methods to help
 * developers to access the inventory (products, items etc).
 */
class Inventory {
  /**
   * Creates an instance of the Inventory class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {Inventory} An instance of the Inventory class.
   */
  constructor(client) {
    this._client = client;
  }
  /**
   * Retrieves the list of parameters configured for the product.
   *
   * @param {string} id   The unique product identifier for which retrieve the parameters.
   *
   * @returns {Array} An array with the Parameter objects.
   */

  async getParametersByProduct(id) {
    return this._client.products.getParameters(id);
  }

  /**
   * Retrieves the list of parameters of scope asset and phase fulfillment configured for
   * the product.
   *
   * @param {string} id   The unique product identifier for which retrieve the parameters.
   *
   * @returns {Array} An array with the Parameter objects.
   */

  async getAssetParametersForFulfillmentByProduct(id) {
    const params = await this.getParametersByProduct(id);
    return filter((param) => param.scope === 'asset' && param.phase === 'fulfillment', params);
  }

  /**
   * Returns the list of templates configured for a product.
   *
   * @param   {string}  id  The unique identifier of the product.
   *
   * @return {Array}    An array of Template objects.
   */
  async getProductTemplates(id) {
    return this._client.products.getTemplates(id);
  }

  /**
   * Returns the list of templates configured for a product with scope "asset".
   *
   * @param   {string}  id  The unique identifier of the product.
   *
   * @return {Array}    An array of Template objects.
   */
  async getProductAssetTemplates(id) {
    const templates = await this.getProductTemplates(id);
    return filter((template) => template.scope === 'asset', templates);
  }

  async getProductActionLink(id, actionId, assetId) {
    return this._client.products.actions(id).link(actionId, assetId);
  }
}

module.exports = Inventory;
