/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
 * The Directory class exposes specialized methods to help
 * developers to access the directory (assets, tier configs, tier accounts).
 */
class Directory {
  /**
   * Creates an instance of the Directory class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {Directory} An instance of the Directory class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of at most **limit** ``TierAccount`` objects that match the provided
   * (optional) query.
   *
   * @param   {Query|string}  query      The optional query to filter results.
   *
   * @return  {Array} An array of ``TierAccount`` object optionally matching the provided query.
   */
  async searchTierAccounts(query) {
    return this._client.tierAccounts.search(query);
  }

  /**
   * Retrieve a ``TierAccount`` by its id.
   *
   * @param   {string}  id  The unique identifier of the TierAccount object.
   *
   * @return  {Object}      The TierAccount object.
   */
  async getTierAccount(id) {
    return this._client.tierAccounts.get(id);
  }

  /**
   * [getAssetsByProductIdExternalId description]
   *
   * @param   {[type]}  productId   [productId description]
   * @param   {[type]}  externalId  [externalId description]
   *
   * @return  {[type]}              [return description]
   */
  async getAssetsByProductIdExternalId(productId, externalId) {
    return this._client.assets.search({
      external_id: externalId,
      'product.id': productId,
    });
  }
}

module.exports = Directory;
