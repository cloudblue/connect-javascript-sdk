/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { buildUrl } = require('./utils');
const { HttpError, APIError } = require('./errors');


/**
 * The GenericResource class is a base class from which inherits every endpoint service
 * of the Cloud Blue Connect API.
 * It provides utility functions usefull in subclasses.
 */
class GenericResource {
  /**
   *
   * @param {ConnectClient} client   A ConnectClient instance.
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
   * @return {Object} The resource.
   */
  async get(id) {
    const url = `${this.baseUri}/${id}`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Create a new resource.
   *
   * @param  {Object}   obj     The resource to create.
   *
   * @return {Object} The created resource.
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
   * @param  {Object}   obj     The eventually partial resource to update.
   *
   * @return {Object} The updated resource.
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

  /* eslint-disable max-len */

  /**
   * Search for a resource.
   *
   * @param  {string|Query}   query        The query to send to the server as a RQL string or RQL query object.
   *
   * @return {Array} An array of resourcesthat match the provided filters.
   */
  async search(filters) { /* eslint-enable max-len */
    const response = await this.fetch(buildUrl(this.baseUri, filters));
    return response.json();
  }

  /**
   * Fetch the URL and returns a response.
   *
   * @param {string} url the URL to fetch.
   * @param {Object} options the request options.
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
