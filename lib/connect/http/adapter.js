/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
/* eslint max-classes-per-file: "off" */
const { forEach, mergeDeepRight, clone } = require('ramda');
const nodefetch = require('node-fetch');

const { isObjectStrict } = require('../utils');

/**
 * The ``AbstractHttpAdapter`` class allow a CloudBlue Connect SDK consumer
 * to wrap a preferred http client library and adapt requests and responses
 * to in order to work with this SDK.
 *
 * @category Base
 */
class AbstractHttpAdapter {
  /**
   * Create a subclass of AbstractHttpAdapter
   *
   * @param {Function} fetch the fetch function used to make the actual http call.
   */
  constructor(fetch) {
    if (this.constructor === AbstractHttpAdapter) {
      throw new Error('HttpAdapter is abstract. You must subclass it!');
    }
    this._fetch = fetch;
    this._before = [];
    this._after = [];
  }

  /**
   * Get or set a list of beforeRequest hook functions.
   *
   * @returns {Array} Array of hooks.
   */
  get beforeRequest() {
    return this._before;
  }

  set beforeRequest(middlewares) {
    this._before = middlewares || [];
  }

  get afterResponse() {
    return this._after;
  }

  set afterResponse(middlewares) {
    this._after = middlewares || [];
  }

  /* eslint-disable class-methods-use-this, no-unused-vars */
  prepareRequest(url, options) {
    throw new Error('Concrete class must implement this method!');
  }

  parseResponse(response) {
    throw new Error('Concrete class must implement this method!');
  }

  fetch(url, options) {
    let reqOptions = clone(options) || {};
    let reqUrl = clone(url);
    forEach((middleware) => {
      const result = middleware(reqUrl, reqOptions);
      reqUrl = result.url;
      reqOptions = result.options;
    }, this._before);
    const req = this.prepareRequest(reqUrl, reqOptions);
    return this._fetch(req.url, req.options)
      .then((response) => {
        response.options = options;
        return response;
      })
      .then(this.parseResponse)
      .then((response) => {
        forEach((middleware) => {
          response = middleware(response); /* eslint no-param-reassign: "off" */
        }, this._after);
        return response;
      });
  }
}


/**
 * The ``DefaultHttpAdapter`` is the default adapter used in the
 * CloudBlue Connect Javascript SDK based on the node-fetch http
 * client library.
 *
 * @extends AbstractHttpAdapter
 * @category Base
 */
class DefaultHttpAdapter extends AbstractHttpAdapter {
  constructor() {
    super(nodefetch);
  }

  prepareRequest(url, options) {
    const newOptions = clone(options);
    if (newOptions.body) {
      if (Array.isArray(newOptions.body) || isObjectStrict(newOptions.body)) {
        newOptions.body = JSON.stringify(newOptions.body);
        newOptions.headers = mergeDeepRight(newOptions.headers, { 'Content-Type': 'application/json' });
      }
    }
    return { url, options: newOptions };
  }

  parseResponse(response) {
    return response;
  }
}

module.exports = {
  AbstractHttpAdapter,
  DefaultHttpAdapter,
};
