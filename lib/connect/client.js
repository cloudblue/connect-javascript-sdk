/*
* This file is part of the Ingram Micro Cloud Blue Connect SDK.
*
* @copyright (c) 2020. Ingram Micro. All Rights Reserved.
*/

const { mergeDeepRight } = require('ramda');

const { DefaultHttpAdapter } = require('./http');
const api = require('./api');


/**
 * *ConnectClient* provides access to resouce endpoints of the Cloud Blue Connect Platform.
 *
 * @category Base
 */
class ConnectClient {
/**
 * Creates a new instance of the Cloud Blue *ConnectClient* class.
 * Configures the *beforeRequest* hooks to inject the API key in the Authorizaton header
 * and prefixes the url with the API's base url.
 *
 * @param   {string}               endpoint  The base URL for API access.
 * @param   {string}               apiKey    The API key to authenticate with Connect.
 * @param   {AbstractHttpAdapter}  adapter   An optional adapter.
 *
 * @returns  {ConnectClient}     An instance of the ConnectClient class.
 */
  constructor(endpoint, apiKey, adapter) {
    this._endpoint = endpoint;
    this._apiKey = apiKey;
    this._adapter = adapter || new DefaultHttpAdapter();
    this._adapter.beforeRequest = [
      (url, options) => this.addEndpointPrefix(this._endpoint, url, options),
      (url, options) => this.addAuthorizationHeader(this._apiKey, url, options),
    ];

    this._accounts = new api.AccountResource(this);
    this._assets = new api.AssetResource(this);
    this._billingRequests = new api.BillingRequestResource(this);
    this._products = new api.ProductResource(this);
    this._requests = new api.RequestResource(this);
    this._conversations = new api.ConversationResource(this);
    this._hubs = new api.HubResource(this);
    this._recurringAssets = new api.RecurringAssetResource(this);
    this._tierAccounts = new api.TierAccountResource(this);
    this._tierAccountRequests = new api.TierAccountRequestResource(this);
    this._tierConfigs = new api.TierConfigResource(this);
    this._tierConfigRequests = new api.TierConfigRequestResource(this);
    this._webhooks = new api.WebhookResource(this);
    this._listingRequests = new api.ListingRequestResource(this);
    this._cases = new api.CaseResource(this);
    this._usageFiles = new api.UsageFileResource(this);
    this._usageReconciliations = new api.UsageReconciliationResource(this);
    this._usageRecords = new api.UsageRecordResource(this);
    this._usageChunks = new api.UsageChunkResource(this);
    this._usageAggregates = new api.UsageAggregateResource(this);
  }

  addBeforeRequestHook(hook) {
    this._adapter.beforeRequest.push(hook);
  }

  addAfterResponseHook(hook) {
    this._adapter.afterResponse.push(hook);
  }

  /**
   * Returns an instance of the *AccountResource* class to access
   * the *Account* resource endpoint.
   *
   * @type {AccountResource}
   */
  get accounts() {
    return this._accounts;
  }

  /**
   * Returns an instance of the *AssetResource* class to access
   * the *Asset* resource endpoint.
   *
   * @type {AssetResource}
   */
  get assets() {
    return this._assets;
  }

  /**
   * Returns an instance of the *BillingRequestResource* class to access
   * the *BillingRequest* resource endpoint.
   *
   * @type {BillingRequestResource}
   */
  get billingRequests() {
    return this._billingRequests;
  }

  /**
   * Returns an instance of the *ConversationResource* class to access
   * the *Conversation* resource endpoint.
   *
   * @type {ConversationResource}
   */
  get conversations() {
    return this._conversations;
  }

  /**
   * Returns an instance of the *ProductResource* class to access
   * the *Product* resource endpoint.
   *
   * @type {ProductResource}
   */
  get products() {
    return this._products;
  }

  /**
   * Returns an instance of the *RequestResource* class to access
   * the *Request* resource endpoint.
   *
   * @type {RequestResource}
   */
  get requests() {
    return this._requests;
  }

  /**
   * Returns an instance of the *HubResource* class to access
   * the *Hub* resource endpoint.
   *
   * @type {HubResource}
   */
  get hubs() {
    return this._hubs;
  }

  /**
   * Returns an instance of the *RecurringAssetResource* class to access
   * the *RecurringAsset* resource endpoint.
   *
   * @type {RecurringAssetResource}
   */
  get recurringAssets() {
    return this._recurringAssets;
  }

  /**
   * Returns an instance of the *TierAccountResource* class to access
   * the *TierAccount* resource endpoint.
   *
   * @type {TierAccountResource}
   */
  get tierAccounts() {
    return this._tierAccounts;
  }

  /**
   * Returns an instance of the *TierAccountRequestResource* class to access
   * the *TierAccountRequest* resource endpoint.
   *
   * @type {TierAccountRequestResource}
   */
  get tierAccountRequests() {
    return this._tierAccountRequests;
  }

  /**
   * Returns an instance of the *TierConfigResource* class to access
   * the *TierConfiguration* resource endpoint.
   *
   * @type {TierConfigResource}
   */
  get tierConfigs() {
    return this._tierConfigs;
  }

  /**
   * Returns an instance of the *TierConfigRequestResource* class to access
   * the *TierConfigurationRequest* resource endpoint.
   *
   * @type {TierConfigRequestResource}
   */
  get tierConfigRequests() {
    return this._tierConfigRequests;
  }

  /**
   * Returns an instance of the *WebhookResource* class to access
   * the *Webhook* resource endpoint.
   *
   * @type {WebhookResource}
   */
  get webhooks() {
    return this._webhooks;
  }

  /**
   * Returns an instance of the *ListingRequestResource* class to access
   * the *ListingRequest* resource endpoint.
   *
   * @type {ListingRequestResource}
   */
  get listingRequests() {
    return this._listingRequests;
  }

  /**
   * Returns an instance of the *CaseResource* class to access
   * the *HelpdesCase* resource endpoint.
   *
   * @type {CaseResource}
   */
  get cases() {
    return this._cases;
  }

  /**
   * Returns an instance of the *UsageFileResource* class to access
   * the *UsageFile* resource endpoint.
   *
   * @type {UsageFileResource}
   */
  get usageFiles() {
    return this._usageFiles;
  }

  /**
   * Returns an instance of the *UsageAggregateResource* class to access
   * the *UsageFile* resource endpoint.
   *
   * @type {UsageAggregateResource}
   */
  get usageAggregates() {
    return this._usageAggregates;
  }

  /**
   * Returns an instance of the *UsageChunkResource* class to access
   * the *UsageChunk* resource endpoint.
   *
   * @type {UsageChunkResource}
   */
  get usageChunks() {
    return this._usageChunks;
  }

  /**
   * Returns an instance of the *UsageReconciliationResource* class to access
   * the *UsageReconciliation* resource endpoint.
   *
   * @type {UsageReconciliationResource}
   */
  get usageReconciliations() {
    return this._usageReconciliations;
  }

  /**
   * Returns an instance of the *UsagerecordResource* class to access
   * the *UsageRecord* resource endpoint.
   *
   * @type {UsageRecordResource}
   */
  get usageRecords() {
    return this._usageRecords;
  }

  /**
   * beforeRequest hook that add the api key to the authorization header.
   *
   * @private
   * @param {string} apiKey the API key to access the Connect API.
   * @param {string} url the URL of the service to be consumed.
   * @param {object} options the options object into which the header must be injected.
   *
   * @returns {object} An object containing the processed url and options.
   *
   */
  addAuthorizationHeader(apiKey, url, options) { /* eslint class-methods-use-this: "off" */
    return {
      url,
      options: mergeDeepRight(options, { headers: { Authorization: apiKey } }),
    };
  }

  /**
   * beforeRequest hook that prefixes the URL with the API's base url.
   *
   * @private
   * @param {string} endpoint The base url of the Connect API.
   * @param {string} url The url of the resources to be consumed.
   * @param {object} options the options object into which the header must be injected.
   *
   * @returns {object} An object containing the processed url and options.
   */
  addEndpointPrefix(endpoint, url, options) {
    const computedUrl = `${endpoint}${url}`;
    return {
      url: computedUrl,
      options,
    };
  }

  /**
   * Fetch the URL and returns a response.
   *
   * @private
   * @param {string} url the URL to fetch.
   * @param {object} options the request options.
   */
  async fetch(url, options) {
    return this._adapter.fetch(url, options);
  }
}


module.exports = ConnectClient;
