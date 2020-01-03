/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const BaseService = require('./base');

class ProductActionService extends BaseService {
  async link(id, assetId) {
    let url = `${this.baseUri}/${id}/actionLink`;
    url = this.appendToQuerystring(url, { asset_id: assetId });
    const response = await this.fetch(url);
    return response.json();
  }
}

class ProductVersionService extends BaseService {
  actions(id) {
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }
}

/**
* The ProductService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class ProductService extends BaseService {
  constructor(client) {
    super(client, '/products');
  }

  actions(id) {
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }

  versions(id) {
    return new ProductVersionService(this._client, `${this.baseUri}/${id}/versions`);
  }
  // /**
  //  * Get a list of the latest version of products that has been published.
  //  *
  //  * @return {Array} An Array of the Product object.
  //  */
  // async list() {
  //   const params = {
  //     status: 'published',
  //     latest: true,
  //   };
  //   const url = this.appendToQuerystring('/products', params);
  //   const response = await this.fetch(url);
  //   return response.json();
  // }
  // /**
  //  * Retrieves the list of parameters configured for the product.
  //  *
  //  * @param {string} id   The unique product identifier for which retrieve the parameters.
  //  *
  //  * @returns {Array} An array with the Parameter objects.
  //  */

  // async getParametersByProduct(id) {
  //   const response = await this.fetch(`/products/${id}/parameters`);
  //   return response.json();
  // }

  // /**
  //  * Retrieves the list of parameters of scope asset and phase fulfillment configured for
  //  * the product.
  //  *
  //  * @param {string} id   The unique product identifier for which retrieve the parameters.
  //  *
  //  * @returns {Array} An array with the Parameter objects.
  //  */

  // async getAssetParametersForFulfillmentByProduct(id) {
  //   const params = await this.getParametersByProduct(id);
  //   return _.filter(params, (param) => param.scope === 'asset' && param.phase === 'fulfillment');
  // }

  // /**
  //  * Returns the list of templates configured for a product.
  //  *
  //  * @param   {string}  id  The unique identifier of the product.
  //  *
  //  * @return {Array}    An array of Template objects.
  //  */
  // async getProductTemplates(id) {
  //   const response = await this.fetch(`/products/${id}/templates`);
  //   return response.json();
  // }

  // /**
  //  * Returns the list of templates configured for a product with scope "asset".
  //  *
  //  * @param   {string}  id  The unique identifier of the product.
  //  *
  //  * @return {Array}    An array of Template objects.
  //  */
  // async getProductAssetTemplates(id) {
  //   const templates = await this.getProductTemplates(id);
  //   return _.filter(templates, (template) => template.scope === 'asset');
  // }
}


module.exports = ProductService;
