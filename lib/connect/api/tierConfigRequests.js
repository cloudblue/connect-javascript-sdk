/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const BaseService = require('./base');

const { addFilterParam } = require('./utils');

/**
* The TierConfigRequestService class provides methods to access the ``TierConfigRequest``
* endpoint of the Cloud Blue Connect API.
*/
class TierConfigRequestService extends BaseService {
  constructor(client) {
    super(client, '/tier/config-requests');
  }

  /**
   * Get a list of tier configuration requests that match all the filter values provided as input.
   * Some fields accept an array of values (search with the `in` operator).
   *
   * @param  {string|Query} filter                               A filter object as described below.
   *
   * @param  {string|Array} filter.type                            The request type (setup|update).
   * @param  {string|Array} filter.status                          The status of the request (tiers_setup|pending|inquiring|approved|failed).
   * @param  {string|Array} filter.id                              The id of the tier configuration request.
   * @param  {string|Array} filter.configurationId                 The id of the tier configuration object that belongs to the request.
   * @param  {string|Array} filter.configurationTierLevel          Tier level for product from customer perspective (1|2).
   * @param  {string|Array} filter.configurationAccountId          The id of the tier account of the tier configuration that belongs to the request.
   * @param  {string|Array} filter.configurationProductId          The id of the product of the tier configuration that belongs to the request.
   * @param  {string|Array} filter.configurationAccountExternalUID The id of the user assignee of this tier configuration request.
   * @param  {string}       filter.assigneeId                      The id of the user assignee of this tier configuration request.
   * @param  {boolean}      filter.unassigned                      True to filter for unassigned requests, false otherwise.
   * @param  {string|Array} orderBy                                The ordering criteria.
   * @param  {number} [limit=100]                                  The maximum number of records to return.
   * @param  {number} [offset=0]                                   The offset from which to start to include records.
   * @return {Array} An array of Request objects that match the provided filters.
   */
  async list({
    type,
    status,
    id,
    configurationId,
    configurationTierLevel,
    configurationAccountId,
    configurationProductId,
    configurationAccountExternalUID,
    assigneeId,
    unassigned,
  }, orderBy, limit = 100, offset = 0) { /* eslint-enable max-len */
    const params = {};

    addFilterParam(params, 'type', type);
    addFilterParam(params, 'status', status);
    addFilterParam(params, 'id', id);
    addFilterParam(params, 'configuration__id', configurationId);
    addFilterParam(params, 'configuration__tier_level', configurationTierLevel);
    addFilterParam(params, 'configuration__account__id', configurationAccountId);
    addFilterParam(params, 'configuration__product__id', configurationProductId);
    addFilterParam(params, 'configuration__account__external_uid', configurationAccountExternalUID);
    addFilterParam(params, 'assignee__id', assigneeId);
    addFilterParam(params, 'unassigned', unassigned);

    let url = this.appendToQuerystring(this.baseUri, params);
    url = this.addSorting(url, orderBy);
    url = this.addPaging(url, limit, offset);

    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Changes the status of a ``TierConfigurationRequest`` to fail.
   *
   * @param  {string}   id     The unique identifier of the TierConfigurationRequest object.
   * @param  {string}   reason The reason for which the TierConfigurationRequest has been failed.
   *
   */
  async fail(id, reason) {
    const url = `/tier/config-requests/${id}/fail`;
    const options = {
      method: 'POST',
      body: {
        reason,
      },
    };
    await this.fetch(url, options);
  }

  /**
   * Changes the status of a ``TierConfigurationRequest`` to inquire.
   *
   * @param  {string}   id      The unique identifier of the TierConfigurationRequest object.
   *
   */

  async inquire(id) {
    const url = `/tier/config-requests/${id}/inquire`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Changes the status of a ``TierConfigurationRequest`` to pending.
   *
   * @param  {string}   id      The unique identifier of the TierConfigurationRequest object.
   *
   */

  async pending(id) {
    const url = `/tier/config-requests/${id}/pend`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Change the status of a ``TierConfigurationRequest`` to approved.
   * To change the status of the TierConfigurationRequest to approved
   * you must provide a Template id.
   *
   * @example
   * // request body using a template id
   * {
   *   template: {
   *     id: 'TL-000-000-000'
   *   }
   * }
   *
   * @param  {string}   id      The unique identifier of the TierConfigurationRequest object.
   * @param  {Object}   request The request body.
   *
   * @return {Object} The rendered Template.
   */
  async approve(id, request) {
    const url = `/tier/config-requests/${id}/approve`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}


module.exports = TierConfigRequestService;
