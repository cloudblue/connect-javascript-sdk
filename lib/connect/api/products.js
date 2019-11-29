/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');

/**
* The ProductService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class ProductService extends BaseService {
  /**
   * Get a list of the latest version of products that has been published.
   * 
   * @return {Array} An Array of the Product object.
   */
  async list() {
    const params = {
      status: 'published',
      latest: true
    }
    const url = this.addParams('/products', params);
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return await response.json();
  }
  /**
   * Retrieve the list of parameters configured for the product
   * 
   * @param {string} id   The unique product identifier for which retrieve the parameters
   * 
   * @returns {Array} An array with the Parameter objects.
   */
  async getParametersByProduct(id) {
    const response = await this.fetch(`/products/${id}/parameters`);
    await this.checkResponse(response);
    return await response.json();
  }

  /**
   * Returns the list of templates configured for a product.
   *
   * @param   {string}  id  The unique identifier of the product.
   *
   * @return {Array}    An array of Template objects
   */
  async getProductTemplates(id) {
    const response = await this.fetch(`/products/${id}/templates`);
    await this.checkResponse(response);
    return await response.json();
  }
}


module.exports = ProductService;
