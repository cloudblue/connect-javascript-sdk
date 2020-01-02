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

  get baseUri() {
    return this._baseUri;
  }

  async get(id) {
    const url = `${this.baseUri}/${id}`;
    const response = await this.fetch(url);
    return response.json();
  }

  async create(obj) {
    const options = {
      method: 'POST',
      body: obj,
    };
    const response = await this.fetch(this.baseUri, options);
    return response.json();
  }

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

  async search(options = {}) {
    let url = this.baseUri;
    url = this.addQuery(url, options.query);
    url = this.addSorting(url, options.orderBy);
    url = this.addPaging(url, options.limit, options.offset);
    const response = await this.fetch(url);
    return response.json();
  }

  /* eslint-disable class-methods-use-this */
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
