/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const BaseService = require('./base');
const { addFilterParam } = require('./utils');
/**
* The ActionService class provides methods to access the ``Action``
* endpoint of the Cloud Blue Connect API.
*/
class ActionService extends BaseService {
  /**
   * Get a list of actions related to a product and optionally version of the product.
   *
   * @param  {string} productId                                    The unique identifier of the product these actions belongs to.
   * @param  {string} productVersion                               The optional product's version identifier.
   * @param  {number} [limit=100]                                  The maximum number of records to return.
   * @param  {number} [offset=0]                                   The offset from which to start to include records.
   * @return {Array} An array of Action objects.
   */
  async list(productId, productVersion, limit = 100, offset = 0) { /* eslint-enable max-len */
    const params = { limit, offset };

    let url = `/products/${productId}`;
    if (productVersion) {
      url = `${url}/versions/${productVersion}`;
    }

    url = `${url}/actions`;
    url = this.addParams(url, params);

    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Retrieve an ``Action`` object by its id.
   *
   * @param   {string}  id              The unique identifier of the Action object.
   * @param   {string}  productId       The unique identifier this Action object belongs to.
   * @param   {string}  productVersion  The optional product's version identifier.
   *
   * @return  {Object}                  The Action object identified by its id.
   */
  async get(id, productId, productVersion) {
    let url = `/products/${productId}`;
    if (productVersion) {
      url = `${url}/versions/${productVersion}`;
    }

    url = `${url}/actions/${id}`;
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Retrieve an ``ActionLink`` object by the ``Action`` id.
   *
   * @param   {string}  id              The unique identifier of the Action object.
   * @param   {string}  productId       The unique identifier this Action object belongs to.
   * @param   {string}  productVersion  The optional product's version identifier.
   *
   * @return  {Object}                  The ActionLink object identified by the Action id.
   */
  async link(id, productId, productVersion, assetId) {
    let url = `/products/${productId}`;
    if (productVersion) {
      url = `${url}/versions/${productVersion}`;
    }

    url = `${url}/actions/${id}/actionLink`;

    const params = {};

    addFilterParam(params, 'asset_id', assetId);
    url = this.addParams(url, params);
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }
}


module.exports = ActionService;
