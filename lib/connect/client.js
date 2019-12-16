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
  * Creates a new instance of the Cloud Blue `ConnectClient` class.
  * Configures the `beforeRequest` hooks to inject the API key in the Authorizaton header
  * and prefixes the url with the API's base url.
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

    this._accounts = new api.AccountService(this._adapter);
    this._products = new api.ProductService(this._adapter);
    this._requests = new api.RequestService(this._adapter);
    this._conversations = new api.ConversationService(this._adapter);
    this._hubs = new api.HubService(this._adapter);
    this._tierAccounts = new api.TierAccountService(this._adapter);
  }

  /**
   * Returns an instance of the `AccountService` class to access
   * the `Account` resource endpoint.
   *
   * @type {AccountService}
   */
  get accounts() {
    return this._accounts;
  }

  /**
   * Returns an instance of the `ConversationService` class to access
   * the `Conversation` resource endpoint.
   *
   * @type {ConversationService}
   */
  get conversations() {
    return this._conversations;
  }

  /**
   * Returns an instance of the `ProductService` class to access
   * the `Product` resource endpoint.
   *
   * @type {ProductService}
   */
  get products() {
    return this._products;
  }

  /**
   * Returns an instance of the `RequestService` class to access
   * the `Request` resource endpoint.
   *
   * @type {RequestService}
   */
  get requests() {
    return this._requests;
  }

  /**
   * Returns an instance of the `HubService` class to access
   * the `Hub` resource endpoint.
   *
   * @type {HubService}
   */
  get hubs() {
    return this._hubs;
  }

  /**
   * Returns an instance of the `TierAccountService` class to access
   * the `Hub` resource endpoint.
   *
   * @type {TierAccountService}
   */
  get tierAccounts() {
    return this._tierAccounts;
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
