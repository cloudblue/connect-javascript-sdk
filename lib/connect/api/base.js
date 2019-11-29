/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const querystring = require('querystring');
const HttpError = require('./errors').HttpError;

/**
 * The BaseService class is a base class from which inherits every endpoint service
 * of the Cloud Blue Connect API.
 * It provides utility functions usefull in subclasses.
 */
 class BaseService {
   /**
    * 
    * @param {AbstractHttpAdapter} adapter A concrete implementation of http adapter.
    */
    constructor(adapter) {
        this._adapter = adapter;
    }
    /**
     * 
     * Add querystring parameters to the URL.
     * 
     * @param {string} url The url of the API endpoint.
     * @param {Object} params An object (key, value) of querystring parameters.
     * 
     * @returns {string} The modified URL with the querystring parameters.
     */
    addParams(url, params) {
        if (params) {
            const separator = url.includes('?') ? '&' : '?';
            const qsParams = querystring.stringify(params);
            if (qsParams) {
                url += `${separator}${qsParams}`;
            }
        }
        return url;
    }
    /**
     * Check if the response is ok (status = 2xx)
     * 
     * @param {Object} response An http response object.
     * 
     * @throws {HttpError} if the http status is not 2xx
     * 
     */
    async checkResponse(response) {
      if (!response.ok) {
        throw new HttpError(response.status, await response.text());
      }
    }
    /**
     * Fetch the URL and returns a response.
     * 
     * @param {string} url the URL to fetch.
     * @param {Object} options the request options.
     */
    async fetch(url, options) {
      return this._adapter.fetch(url, options);
  }
 }

 module.exports = BaseService;
