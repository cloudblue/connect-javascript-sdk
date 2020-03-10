/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/**
 * The Directory class exposes specialized methods to help
 * developers to access the directory (assets, tier configs, tier accounts).
 *
 * @category Operations
 */
class Directory {
  /**
   * Creates an instance of the Directory class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {Directory} An instance of the Directory class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of *Asset* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array} An array of *Asset* object optionally matching the provided query.
   */
  async searchAssets(query) {
    return this._client.assets.search(query);
  }

  /**
   * Returns a list of *TierConfiguration* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array}             An array of *TierConfiguration* object optionally
   *                               matching the provided query.
   */
  async searchTierConfigurations(query) {
    return this._client.tierConfigs.search(query);
  }

  /**
   * Returns a list of *TierAccount* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array} An array of *TierAccount* object optionally matching the provided query.
   */
  async searchTierAccounts(query) {
    return this._client.tierAccounts.search(query);
  }

  /**
   * Retrieve a *TierAccount* by its id.
   *
   * @param   {string}  id  The unique identifier of the TierAccount object.
   *
   * @returns  {object}      The TierAccount object.
   */
  async getTierAccount(id) {
    return this._client.tierAccounts.get(id);
  }

  /**
   * Returns a list of *Asset* objects based on the productId and
   * the *Asset* externalId.
   *
   * @param   {string}  productId   The unique id of the *Product* related to this *Asset*.
   * @param   {string}  externalId  The external identifier of the *Asset*.
   *
   * @returns  {Array}              An array of *Asset* objects.
   */
  async getAssetsByProductIdExternalId(productId, externalId) {
    return this._client.assets.search({
      external_id: externalId,
      'product.id': productId,
    });
  }

  /**
   * Creates a new *TierAccountRequest*
   *
   * @param   {object}  request  The TierAccountRequest object.
   *
   * @returns {object}           The created TierAccountRequest object.
   */
  async createTierAccountRequest(request) {
    return this._client.tierAccountRequests.create(request);
  }

  /**
   * Returns a list of *TierAccountRequest* objects that match the provided
   * filters.
   *
   *
   * @param   {object} query    A RQL query.
   * @returns {Array}           An array of *TierAccountRequest* objects
   *                            that match the provided filters.
   */
  async searchTierAccountRequests(query) {
    return this._client.tierAccountRequests.search(query);
  }

  /**
   * Retrieve the *TierAccountRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *TierAccountRequest* object.
   *
   * @returns  {object}      The *TierAccountRequest* object.
   */
  async getTierAccountRequest(id) {
    return this._client.tierAccountRequests.get(id);
  }

  /**
   * Accept the *TierAccountRequest* object identified by its id.
   *
   * @param   {string}  id    The unique identifier of the *TierAccountRequest* object.
   *
   * @returns  {object}       The *TierAccountRequest* object.
   */
  async acceptTierAccountRequest(id) {
    return this._client.tierAccountRequests.accept(id);
  }

  /**
   * Ignore the *TierAccountRequest* object identified by its id.
   *
   * @param   {string}  id      The unique identifier of the *TierAccountRequest* object.
   * @param   {string}  reason  The reason for which this request has been ignored.
   *
   * @returns  {object}       The *TierAccountRequest* object.
   */
  async ignoreTierAccountRequest(id, reason) {
    return this._client.tierAccountRequests.ignore(id, reason);
  }

  /**
   * Returns the specified version of the *TierAccount* object identified by its id.
   *
   * @param   {string}  id       The unique identifier of the *TierAccount* object.
   * @param   {string}  version  The version to be retrieved.
   *
   * @returns  {object}       The *TierAccount* object.
   */
  async getTierAccountVersion(id, version) {
    return this._client.tierAccounts.versions(id).get(version);
  }
}

module.exports = Directory;
