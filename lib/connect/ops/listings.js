/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/**
 * The Listings class exposes specialized methods to help
 * developers to handle listings and listing requests.
 *
 * @category Operations
 */
class Listings {
  /**
   * Creates an instance of the Listings class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {Listings} An instance of the Listings class.
   */
  constructor(client) {
    this._client = client;
  }

  /**
   * Returns a list of *ListingRequest* objects that match the provided
   * (optional) query.
   *
   * @param   {object}  query      The optional query to filter results.
   *
   * @returns  {Array}             An array of *ListingRequest* object optionally matching
   *                               the provided query.
   */
  async searchListingRequests(query) {
    return this._client.listingRequests.search(query);
  }

  /**
   * Creates a new *ListingRequest*
   *
   * @param   {object}  request  The ListingRequest object.
   *
   * @returns {object}           The created ListingRequest object.
   */
  async createListingRequest(request) {
    return this._client.listingRequests.create(request);
  }

  /**
   * Retrieve the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async getListingRequest(id) {
    return this._client.listingRequests.get(id);
  }

  /**
   * Submit the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async submitListingRequest(id) {
    return this._client.listingRequests.submit(id);
  }

  /**
   * Cancel the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async cancelListingRequest(id) {
    return this._client.listingRequests.cancel(id);
  }

  /**
   * Refine the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async refineListingRequest(id) {
    return this._client.listingRequests.refine(id);
  }

  /**
   * Complete the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async completeListingRequest(id) {
    return this._client.listingRequests.complete(id);
  }

  /**
   * Deploy the *ListingRequest* object identified by its id.
   *
   * @param   {string}  id   The unique identifier of the *ListingRequest* object.
   *
   * @returns  {object}      The *ListingRequest* object.
   */
  async deployListingRequest(id) {
    return this._client.listingRequests.deploy(id);
  }
}

module.exports = Listings;
