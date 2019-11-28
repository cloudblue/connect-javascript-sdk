/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

 /**
 * The ProductService class provides methods to access the products
 * endpoint of the Cloud Blue Connect API.
 */
class ProductService {
    /**
     * Creates a new instance of the ProductService class.
     *
     * @param   {Function}  request  A function to makes the http call.
     *
     * @return  {ProductService}     An instance of the ProductService class.
     */
    constructor(request) {
        this.request = request;
    }
    /**
     * Get a list of the latest version of products that has been published.
     * 
     * @return {Promise}    The Promise of the http call.
     */
    list() {
        const options = {
            url: '/products',
            params: {
                status: 'published',
                latest: true
              }
          }
          return this.request(options);
    }
    /**
     * 
     * @param {string} id   The unique product identifier for which retrieve the parameters
     */
    getParametersByProduct(id) {
        const options = {
            url: `/products/${id}/parameters`
        }
        return this.request(options);
    }
  }
  
  
module.exports = ProductService;
