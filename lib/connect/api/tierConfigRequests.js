/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const GenericResource = require('./base');

/**
* The TierConfigRequestResource class provides methods to access the ``TierConfigRequest``
* endpoint of the Cloud Blue Connect API.
*/
class TierConfigRequestResource extends GenericResource {
  /**
   * Creates a new instance of the ``TierConfigRequestResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {TierConfigRequestResource}  An instance of the ``TierConfigRequestResource`` class.
   */
  constructor(client) {
    super(client, '/tier/config-requests');
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


module.exports = TierConfigRequestResource;
