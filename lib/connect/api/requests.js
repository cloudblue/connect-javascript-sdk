/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The *RequestResource* class provides methods to access the *Request*
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class RequestResource extends GenericResource {
  /**
   * Creates a new instance of the *RequestResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {RequestResource}  An instance of the *RequestResource* class.
   */
  constructor(client) {
    super(client, '/requests');
  }

  /**
   * Change the status of a *Request* to fail.
   *
   * @param  {string}   id     The unique identifier of the Request object.
   * @param  {string}   reason The reason for which the Request has been failed.
   *
   * @returns {object} The updated Request object.
   */
  async fail(id, reason) {
    const url = `${this.baseUri}/${id}/fail`;
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
   * Change the status of a *Request* to inquire.
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
   * @param  {object}   request The request body.
   *
   * @returns {object} The updated Request object.
   */

  async inquire(id, request) {
    const url = `${this.baseUri}/${id}/inquire`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a *Request* to approved.
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
   * @param  {object}   request The request body.
   *
   * @returns {object} The updated Request object.
   */
  async approve(id, request) {
    const url = `${this.baseUri}/${id}/approve`;
    const options = {
      method: 'POST',
      body: request,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a *Request* to pending.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @returns {object} The updated Request object.
   */
  async pending(id) {
    const url = `${this.baseUri}/${id}/pend`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a *Request* to scheduled.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @returns {object} The updated Request object.
   */
   async schedule(id, data) {
    const url = `${this.baseUri}/${id}/schedule`;
    const options = {
      method: 'POST',
      body: {
        data,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a *Request* to revoking.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @returns {object} The updated Request object.
   */
   async revoke(id, data) {
    const url = `${this.baseUri}/${id}/revoke`;
    const options = {
      method: 'POST',
      body: {
        data,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Change the status of a *Request* to revoqued.
   *
   * @param  {string}   id      The unique identifier of the Request object.
   *
   * @returns {object} The updated Request object.
   */
   async confirm(id) {
    const url = `${this.baseUri}/${id}/confirm`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

}


module.exports = RequestResource;
