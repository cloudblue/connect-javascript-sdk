/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
const _ = require('lodash');
const querystring = require('querystring');
const { Query } = require('rql/query');
const { HttpError, APIError } = require('./errors');


/**
 * The BaseService class is a base class from which inherits every endpoint service
 * of the Cloud Blue Connect API.
 * It provides utility functions usefull in subclasses.
 */
class BaseService {
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

  async list(options = {}) {
    return this.search(options);
  }

  /* eslint-disable max-len */

  /**
   * Search for a resource.
   *
   * @param  {Object}         options              The search options object as described below.
   * @param  {string|Query}   options.query        The query to send to the server as a RQL string or RQL query object.
   * @param  {string|Array}   options.orderBy      The ordering criteria.
   * @param  {number}         [options.limit=100]  The maximum number of results to return.
   * @param  {number}         [options.offset=0]   The offset from which to start to include results.
   *
   * @return {Array} An array of resourcesthat match the provided filters.
   */
  async search(options = {}) { /* eslint-enable max-len */
    let url = this.baseUri;
    url = this.addQuery(url, options.query);
    url = this.addSorting(url, options.orderBy);
    url = this.addPaging(url, options.limit, options.offset);
    const response = await this.fetch(url);
    return response.json();
  }

  /* eslint-disable class-methods-use-this */

  /**
   * Append parameters to the querystring.
   *
   * @param   {string}         url      The URL to which append the parameters.
   * @param   {string|Object}  params   An plain object of paramers or a partial querystring.
   *
   * @return  {string}          The modified URL with querystring parameters.
   */
  appendToQuerystring(url, params) {
    let computedUrl = url;
    if (params) {
      const separator = url.includes('?') ? '&' : '?';
      if (typeof params === 'string') {
        computedUrl += `${separator}${params}`;
      } else if (_.isPlainObject(params)) {
        const qsParams = querystring.stringify(params);
        if (qsParams) {
          computedUrl += `${separator}${qsParams}`;
        }
      } else {
        throw new Error('Only strings and plain objects are supported.');
      }
    }
    return computedUrl;
  }

  /**
   * Add a RQL query to the querystring.
   *
   * @param   {string}        url    The URL to which append the RQL query.
   * @param   {string|Query}  query  The RQL query to append.
   *
   * @return  {string}         The modified URL with the RQL query included.
   */
  addQuery(url, query) {
    if (query) {
      if (typeof query === 'string' || query instanceof Query) {
        const q = query.toString();
        return this.appendToQuerystring(url, q);
      }
      throw new Error('Only rql string or rql Query are supported');
    }
    return url;
  }

  /**
   * Append the order_by parameter to the querystring.
   *
   * @param   {string}        url      The URL to which append the order_by parameter.
   * @param   {string|Array}  orderBy  The ordering criteria.
   *
   * @return  {string}           The modified URL with the order_by parameter.
   */
  addSorting(url, orderBy) {
    if (orderBy) {
      if (typeof orderBy === 'string') {
        return this.appendToQuerystring(url, { order_by: orderBy });
      }
      if (Array.isArray(orderBy)) {
        return this.appendToQuerystring(url, { order_by: orderBy.join() });
      }
      throw new Error('Only string or Array of strings are supported');
    }
    return url;
  }

  /**
   * Append the limit and offset parameter to the querystring.
   *
   * @param   {string}  url     The URL to which append the limit and offset parameters.
   * @param   {number}  limit   The limit value.
   * @param   {number}  offset  The offset value.
   *
   * @return  {string}          The modified URL with the limit and offset parameters.
   */
  addPaging(url, limit = 100, offset = 0) {
    if (typeof limit === 'number' && typeof offset === 'number') {
      return this.appendToQuerystring(url, { limit, offset });
    }
    return url;
  }


  /**
   * Fetch the URL and returns a response.
   *
   * @param {string} url the URL to fetch.
   * @param {Object} options the request options.
   */
  async fetch(url, options) {
    // console.log(`fetch from ${url}`);
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

module.exports = BaseService;
