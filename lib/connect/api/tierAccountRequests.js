/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
/**
 * The *TierAccountRequestResource* class provides methods to access the tier account
 * requests endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class TierAccountRequestResource extends GenericResource {
  /**
   * Creates a new instance of the *TierAccountRequestResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {TierAccountRequestResource}  An instance of the *TierAccountRequestResource* class.
   */
  constructor(client) {
    super(client, '/tier/account-requests');
  }

  /**
   * Accept the TierAccountRequest.
   *
   * @param  {string}   id      The unique identifier of the TierAccountRequest object.
   *
   * @returns {object} The accepted TierAccountRequest object.
   */
  async accept(id) {
    const url = `${this.baseUri}/${id}/accept`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Ignore the TierAccountRequest.
   *
   * @param  {string}   id      The unique identifier of the TierAccountRequest object.
   * @param  {string}   reason  The reason for which vendor ignore this request.
   *
   * @returns {object} The ignored TierAccountRequest object.
   */
  async ignore(id, reason) {
    const url = `${this.baseUri}/${id}/ignore`;
    const options = {
      method: 'POST',
      body: {
        reason,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}

module.exports = TierAccountRequestResource;
