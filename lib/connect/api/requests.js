/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-len */

const GenericResource = require('./base');
const { buildUrl } = require('./utils');
const { rql2drf } = require('./helpers');

/**
* The RequestResource class provides methods to access the ``Request``
* endpoint of the Cloud Blue Connect API.
*/
class RequestResource extends GenericResource {
  /**
   * Creates a new instance of the ``RequestResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {RequestResource}  An instance of the ``RequestResource`` class.
   */
  constructor(client) {
    super(client, '/requests');
  }

  async search(options = {}) {
    let url = this.optionsToUrl(
      {
        limit: options.limit,
        offset: options.offset,
        orderBy: options.orderBy,
      },
    );
    url = buildUrl(url, rql2drf(options.query));
    const response = await this.fetch(url);
    return response.json();
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


module.exports = RequestResource;
