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
   * @param   {Query|string}  query       The optional query to filter results.
   * @param   {string}        orderBy     The ordering criteria.
   * @param   {number}        [limit=100] The maximum number of records to return.
   * @param   {number}        [offset=0]  The offset from which to start to include records.
   *
   * @return  {Array} An array of ``TierAccount`` object optionally matching the provided query.
   */
  listTierAccounts(query, orderBy, limit, offset) {
    return this._client.tierAccounts.list(query, orderBy, limit, offset);
  }

  /**
   * Retrieve a ``TierAccount`` by its id.
   *
   * @param   {string}  id  The unique identifier of the TierAccount object.
   *
   * @return  {Object}      The TierAccount object.
   */
  getTierAccount(id) {
    return this._client.tierAccounts.get(id);
  }
}

module.exports = Directory;
