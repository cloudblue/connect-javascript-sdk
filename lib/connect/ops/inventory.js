/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { filter } = require('ramda');

/**
 * The Inventory class exposes specialized methods to help
 * developers to access the inventory (products, items etc).
 *
 * @category Operations
 */
class Inventory {
  /**
   * Creates an instance of the Inventory class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {Inventory} An instance of the Inventory class.
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
    return this._client.products.parameters(id).search();
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
    return this._client.products.parameters(id).search({
      scope: 'asset',
      phase: 'fulfillment',
    });
  }

  /**
   * Returns the list of templates configured for a product.
   *
   * @param   {string}  id  The unique identifier of the product.
   *
   * @returns {Array}    An array of Template objects.
   */
  async getProductTemplates(id) {
    return this._client.products.getTemplates(id);
  }

  /**
   * Returns the list of templates configured for a product with scope "asset".
   *
   * @param   {string}  id  The unique identifier of the product.
   *
   * @returns {Array}    An array of Template objects.
   */
  async getProductAssetTemplates(id) {
    const templates = await this.getProductTemplates(id);
    return filter((template) => template.scope === 'asset', templates);
  }

  /**
   * Returns the action link for a product action.
   *
   * @param   {string}  id        The unique identifier of the product.
   * @param   {string}  actionId  The unique product action identifier.
   * @param   {string}  assetId   The unique asset identifier.
   *
   * @returns {Array}    An array of Template objects.
   */
  async getProductActionLink(id, actionId, assetId) {
    return this._client.products.actions(id).link(actionId, assetId);
  }

  /**
   * Search the parameters configured for a product.
   *
   * @param {string} productId   The id of the product for which search parameters.
   * @param {object} query       The filter query.
   *
   * @returns {Array} An array with the Parameter objects.
   */

  async searchProductParameters(productId, query) {
    return this._client.products.parameters(productId).search(query);
  }
}

module.exports = Inventory;
