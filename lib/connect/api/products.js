/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

 const {addParams, checkResponse} = require('./utils');


/**
* The ProductService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class ProductService {
    /**
     * Creates a new instance of the ProductService class.
     *
     * @param   {AbstractHttpAdapter}  adapter  The adapter to make the http request.
     *
     * @return  {ProductService}     An instance of the ProductService class.
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * Get a list of the latest version of products that has been published.
     * 
     * @return {Array}    An Array of Products
     */
    async list() {
        const params = {
            status: 'published',
            latest: true
        }
        const url = addParams('/products', params);
        const response = await this.adapter.fetch(url);
        await checkResponse(response);
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
        const response = await this.adapter.fetch(`/products/${id}/parameters`);
        await checkResponse(response);
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
        const response = await this.adapter.fetch(`/products/${id}/templates`);
        await checkResponse(response);
        return await response.json();
    }
}


module.exports = ProductService;
