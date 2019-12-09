/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
/* eslint max-classes-per-file: "off" */
const _ = require('lodash');
const nodefetch = require('node-fetch');

/**
 * This abstract class allow ....
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
    let reqOptions = options || {};
    let reqUrl = url;
    _.forEach(this._before, (middleware) => {
      const result = middleware(reqUrl, reqOptions);
      reqUrl = result.url;
      reqOptions = result.options;
    });
    const req = this.prepareRequest(reqUrl, reqOptions);
    return this._fetch(req.url, req.options)
      .then((response) => {
        response.options = options;
        return response;
      })
      .then(this.parseResponse)
      .then((response) => {
        _.forEach(this._after, (middleware) => {
          response = middleware(response); /* eslint no-param-reassign: "off" */
        });
        return response;
      });
  }
}

class DefaultHttpAdapter extends AbstractHttpAdapter {
  constructor() {
    super(nodefetch);
  }

  prepareRequest(url, options) {
    return { url, options };
  }

  parseResponse(response) {
    return response;
  }
}

module.exports = {
  AbstractHttpAdapter,
  DefaultHttpAdapter,
};
