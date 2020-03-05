/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
 * The Subscriptions class exposes specialized methods to help
 * developers to handle subscriptions (recurring assets and billing requests.).
 *
 * @category Operations
 */
class Subscriptions {
  /**
   * Creates an instance of the Subscriptions class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {Subscriptions} An instance of the Subscriptions class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of *BillingRequest* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array}             An array of *BillingRequest* object optionally matching
   *                               the provided query.
   */
  async searchBillingRequests(query) {
    return this._client.billingRequests.search(query);
  }

  /**
   * Creates a new *BillingRequest*
   *
   * @param   {object}  request  The BillingRequest object.
   *
   * @returns {object}           The created BillingRequest object.
   */
  async createBillingRequest(request) {
    return this._client.billingRequests.create(request);
  }

  /**
   * Retrieve the *BillingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *BillingRequest* object.
   *
   * @returns  {object}      The *BillingRequest* object.
   */
  async getBillingRequest(id) {
    return this._client.billingRequests.get(id);
  }

  /**
   * Updates the attributes of a *BillingRequest* object.
   *
   * @param   {string}  id          The unique identifier of the BillingRequest object.
   * @param   {object}  attributes  An attributes object to be updated.
   *
   * @returns  {object} The updated BillingRequest attributes object.
   */
  async updateBillingRequestAttributes(id, attributes) {
    return this._client.billingRequests.updateAttributes(id, attributes);
  }

  /**
   * Returns a list of *RecurringAsset* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array}             An array of *RecurringAsset* object optionally matching
   *                               the provided query.
   */
  async searchRecurringAssets(query) {
    return this._client.recurringAssets.search(query);
  }

  /**
   * Retrieve the *RecurringAsset* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *RecurringAsset* object.
   *
   * @returns  {object}      The *RecurringAsset* object.
   */
  async getRecurringAsset(id) {
    return this._client.recurringAssets.get(id);
  }
}

module.exports = Subscriptions;
