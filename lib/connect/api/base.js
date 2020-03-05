/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { buildUrl } = require('./utils');
const { HttpError, APIError } = require('./errors');


/**
 * The *GenericResource* map a generic endpoint of the CloudBlue
 * Connect API. Each API endpoint should extend this class and
 * implements endpoint specific actions and subresources access.
 *
 * @category Resources
 */
class GenericResource {
  /**
   *
   * @param {ConnectClient} client   A *ConnectClient* instance.
   * @param {string}        baseUri  The base URI of the resource
   */
  constructor(client, baseUri) {
    this._client = client;
    this._baseUri = baseUri;
  }

  /**
   * Returns the base URI of the resource mapped by this class.
   *
   * @type {string}
   */
  get baseUri() {
    return this._baseUri;
  }

  /**
   * Retrieve a resource by its unique identifier.
   *
   * @param  {string}   id     The unique identifier of the resource to retrieve.
   *
   * @returns {object} The resource.
   */
  async get(id) {
    const url = `${this.baseUri}/${id}`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Create a new resource.
   *
   * @param  {object}   obj     The resource to create.
   *
   * @returns {object} The created resource.
   */
  async create(obj) {
    const options = {
      method: 'POST',
      body: obj,
    };
    const response = await this.fetch(this.baseUri, options);
    return response.json();
  }

  /**
   * Update a resource.
   *
   * @param  {string}   id      The unique identifier of the resource to update.
   * @param  {object}   obj     The eventually partial resource to update.
   *
   * @returns {object} The updated resource.
   */
  async update(id, obj) {
    const url = `${this.baseUri}/${id}`;
    const options = {
      method: 'PUT',
      body: obj,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Delete a resource.
   *
   * @param  {string}   id      The unique identifier of the resource to delete.
   *
   */
  async delete(id) {
    const url = `${this.baseUri}/${id}`;
    const options = {
      method: 'DELETE',
    };
    await this.fetch(url, options);
  }

  /**
   * Search for a resource.
   *
   * @param  {object}   filters   The query to send to the server as a RQL object.
   *
   * @returns {Array} An array of resources that match the provided filters.
   */
  async search(filters) {
    const response = await this.fetch(buildUrl(this.baseUri, filters));
    return response.json();
  }

  /**
   * Fetch the URL and returns a response.
   *
   * @param {string} url the URL to fetch.
   * @param {object} options the request options.
   */
  async fetch(url, options) {
    const response = await this._client.fetch(url, options);
    if (!response.ok) {
      if (response.headers.get('content-type') === 'application/json') {
        throw new APIError(response.status, await response.text());
      }
      throw new HttpError(response.status, await response.text());
    }
    return Promise.resolve(response);
  }
}

module.exports = GenericResource;
