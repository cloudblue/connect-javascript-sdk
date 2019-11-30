/**
* This file is part of the Ingram Micro Cloud Blue Connect SDK.
*
* @copyright (c) 2019. Ingram Micro. All Rights Reserved.
*/

const _ = require('lodash');
const { DefaultHttpAdapter } = require('./http');
const api = require('./api');


/**
* ConnectClient provides access to resouce endpoints of the Cloud Blue Connect Platform.
*/
class ConnectClient {
  /**
  * Creates a new instance of the Cloud Blue ConnectClient class.
  * Configure the beforeRequest hooks to inject the API key in the Authorizaton header
  * and prefixes the url with the API's base url.
  * It also add as a member of this class each endpoint service class exposed from the api package.
  *
  * @param   {string}  endpoint  The base URL for API access.
  * @param   {string}  apiKey    The API key to authenticate with Connect.
  * @param   {AbstractHttpAdapter}  adapter An optional adapter.
  *
  * @return  {ConnectClient}     An instance of the ConnectClient class.
  */
  constructor(endpoint, apiKey, adapter) {
    this._endpoint = endpoint;
    this._apiKey = apiKey;
    this._adapter = adapter || new DefaultHttpAdapter();
    this._adapter.beforeRequest = [
      (url, options) => this.addEndpointPrefix(this._endpoint, url, options),
      (url, options) => this.addAuthorizationHeader(this._apiKey, url, options),
    ];
    // Add a property to this object for each endpoint service exposed by the api package.
    _.forOwn(api, (Klazz, key) => {
      this[key] = new Klazz(this._adapter);
    });
  }

  /**
   * beforeRequest hook that add the api key to the authorization header.
   *
   * @param {string} apiKey the API key to access the Connect API.
   * @param {string} url the URL of the service to be consumed.
   * @param {Object} options the options object into which the header must be injected.
   *
   * @returns {Object} An object containing the processed url and options.
   *
   */
  addAuthorizationHeader(apiKey, url, options) { /* eslint class-methods-use-this: "off" */
    return {
      url,
      options: _.merge(options, { headers: { Authorization: apiKey } }),
    };
  }

  /**
   * beforeRequest hook that prefixes the URL with the API's base url.
   *
   * @param {string} endpoint The base url of the Connect API.
   * @param {string} url The url of the resources to be consumed.
   * @param {Object} options the options object into which the header must be injected.
   *
   * @returns {Object} An object containing the processed url and options.
   */
  addEndpointPrefix(endpoint, url, options) {
    const computedUrl = `${endpoint}${url}`;
    return {
      url: computedUrl,
      options,
    };
  }
}


module.exports = ConnectClient;
