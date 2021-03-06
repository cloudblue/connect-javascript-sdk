/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const GenericResource = require('./base');

/**
 * The *UsageFileResource* class provides methods to access the usage file
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class UsageReconciliationResource extends GenericResource {
  /**
   * Creates a new instance of the *UsageReconciliationResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {UsageRecordResource}  An instance of the *UsageFileResource* class.
   */
  constructor(client) {
    super(client, '/usage/reconciliations');
  }

  /**
   * Get processed files.
   *
   * @param   {string}  id                  The unique identifier of the *Usage File*.
   * @returns {UsageReconciliationResource} An instance of the *UsageReconciliationResource*.
   *
   */
  async processedFile(id) {
    const url = `${this.baseUri}/${id}/processedFile`;
    const options = {
      method: 'GET',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Get uploaded files.
   *
   * @param   {string}  id                  The unique identifier of the *Usage File*.
   * @returns {UsageReconciliationResource} An instance of the *UsageReconciliationResource*.
   *
   */
  async uploadedFile(id) {
    const url = `${this.baseUri}/${id}/uploadedFile`;
    const options = {
      method: 'GET',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}
module.exports = UsageReconciliationResource;
