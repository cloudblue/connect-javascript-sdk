/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const BaseService = require('./base');

const { rql2legacy } = require('./utils');

/**
* The RequestService class provides methods to access the ``Request``
* endpoint of the Cloud Blue Connect API.
*/
class RequestService extends BaseService {
  constructor(client) {
    super(client, '/requests');
  }

  addQuery(url, query) {
    return this.appendToQuerystring(url, rql2legacy(query));
  }

  /**
   * Change the status of a ``Request`` to fail.
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {string}   reason The reason for which the Request has been failed.
   *
   * @return {Object} The updated Request object.
   */
  async fail(id, reason) {
    const url = `/requests/${id}/fail`;
    const options = {
      method: 'POST',
      body: {
        reason,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to inquire.
   * To change the status of the Request to inquire you must provide
   * either a template id or a template tile.
   *
   *
   *
   * @example
   * // request body using a template id
   * {
   *   template_id: 'TL-827-840-476'
   * }
   *
   * @example
   * // request body using an activation tile
   * {
   *   activation_tile: '<rendered text>'
   * }
   *
   * @param  {string}   id      The unique identifier of the Request object.
   * @param  {Object}   request The request body.
   *
   * @return {Object} The updated Request object.
   */

  async inquire(id, request) {
    const url = `/requests/${id}/inquire`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to approved.
   * To change the status of the Request to approved you must provide
   * either a template id or a template tile.
   *
   * @example
   * // request body using a template id
   * {
   *   template_id: 'TL-827-840-476'
   * }
   *
   * @example
   * // request body using an activation tile
   * {
   *   activation_tile: '<rendered text>'
   * }
   *
   * @param  {string}   id      The unique identifier of the Request object.
   * @param  {Object}   request The request body.
   *
   * @return {Object} The updated Request object.
   */
  async approve(id, request) {
    const url = `/requests/${id}/approve`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a ``Request`` to pending.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @return {Object} The updated Request object.
   */
  async pend(id) {
    const url = `/requests/${id}/pend`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}


module.exports = RequestService;
