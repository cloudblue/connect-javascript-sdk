/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
/**
 * The *ListingRequestResource* class provides methods to access the listing
 * requests endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class ListingRequestResource extends GenericResource {
  /**
   * Creates a new instance of the *ListingRequestResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {ListingRequestResource}  An instance of the *ListingRequestResource* class.
   */
  constructor(client) {
    super(client, '/listing-requests');
  }

  /**
   * Cancel the ListingRequest.
   *
   * @param  {string}   id      The unique identifier of the ListingRequest object.
   *
   */
  async cancel(id) {
    const url = `${this.baseUri}/${id}/cancel`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Complete the ListingRequest.
   *
   * @param  {string}   id      The unique identifier of the ListingRequest object.
   *
   */
  async complete(id) {
    const url = `${this.baseUri}/${id}/complete`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Deploy the ListingRequest.
   *
   * @param  {string}   id      The unique identifier of the ListingRequest object.
   *
   */
  async deploy(id) {
    const url = `${this.baseUri}/${id}/deploy`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Refine the ListingRequest.
   *
   * @param  {string}   id      The unique identifier of the ListingRequest object.
   *
   */
  async refine(id) {
    const url = `${this.baseUri}/${id}/refine`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }

  /**
   * Submit the ListingRequest.
   *
   * @param  {string}   id      The unique identifier of the ListingRequest object.
   *
   */
  async submit(id) {
    const url = `${this.baseUri}/${id}/submit`;
    const options = {
      method: 'POST',
    };
    await this.fetch(url, options);
  }
}

module.exports = ListingRequestResource;
