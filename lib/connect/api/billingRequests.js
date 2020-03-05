/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
/**
 * The *BillingRequestResource* class provides methods to access the billing
 * requests endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class BillingRequestResource extends GenericResource {
  /**
   * Creates a new instance of the *BillingRequestResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {BillingRequestResource}  An instance of the *BillingRequestResource* class.
   */
  constructor(client) {
    super(client, '/subscriptions/requests');
  }

  /**
   * Update billing request attributs.
   *
   * @param   {string}  id          The unique identified of the *BillingRequest*.
   * @param   {object}  attributes  An object containing the attributes to update.
   *
   * @returns  {object}             The updated attributes object.
   */
  async updateAttributes(id, attributes) {
    const url = `${this.baseUri}/${id}/attributes`;
    const options = {
      method: 'PUT',
      body: attributes,
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}

module.exports = BillingRequestResource;
