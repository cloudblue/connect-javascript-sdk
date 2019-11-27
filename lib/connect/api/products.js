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
     * Returns the list of templates configured for a product.
     *
     * @param   {string}  id  The unique identifier of the product.
     *
     * @return {Promise}    The Promise of the http call.
     */
    getProductTemplates(id) {
        const options = {
            url: `/products/${id}/templates`
        }
        return this.request(options);
    }
}


module.exports = ProductService;
