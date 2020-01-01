/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');
const { addOrderingParam } = require('./utils');
/**
 * The AccountService class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class TierAccountService extends BaseService {
  /**
   * Get a list of tier accounts that match the filter provided as input.
   *
   * @param  {Query|string} query       A RQL query object or a RQL query as string.
   *
   * @param  {string|Array} orderBy     The ordering criteria.
   * @param  {number}       [limit=100] The maximum number of records to return.
   * @param  {number}       [offset=0]  The offset from which to start to include records.
   * @return {Array} An array of ``TierAccount`` objects that match the provided filters.
   */
  async list(query, orderBy, limit = 100, offset = 0) {
    let url = '/tier/accounts';
    const params = { limit, offset };
    url = this.addRQLQuery(url, query);
    addOrderingParam(params, orderBy);
    url = this.addParams(url, params);
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Retrieve a ``TierAccount`` object by its id.
   *
   * @param  {string}   id      The unique identifier of the TierAccount object.
   *
   * @return {Object} The TierAccount object.
   */
  async get(id) {
    const url = `/tier/accounts/${id}`;
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }
}

module.exports = TierAccountService;
