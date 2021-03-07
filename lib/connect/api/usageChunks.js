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
class UsageChunkResource extends GenericResource {
  /**
   * Creates a new instance of the *UsageChunkResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {UsageChunkResource}  An instance of the *UsageFileResource* class.
   */
  constructor(client) {
    super(client, '/usage/chunks');
  }

  /**
   * Close *Chunk File*.
   *
   * @param   {string}  id                  The unique identifier of the *Usage File*.
   * @param   {string} externalBillingId    Id of the billing to close chunk
   * @param   {string} externalBillingNote  Note of the billing to close chunk
   * @returns {UsageChunkResource}          An instance of the *UsageChunkResource*.
   *
   */
  async close(id, externalBillingId, externalBillingNote) {
    const url = `${this.baseUri}/${id}/close`;
    const options = {
      method: 'POST',
      body: {
        external_billing_id: externalBillingId,
        external_billing_note: externalBillingNote,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Download *Chunk File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageChunckResource} An instance of the *UsageChunkResource*
   *
   */
  async download(id) {
    const url = `${this.baseUri}/${id}/download`;
    const options = {
      method: 'GET',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Regenerate *Chunk File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageChunckResource} An instance of the *UsageChunkResource*
   *
   */
  async regenerate(id) {
    const url = `${this.baseUri}/${id}/regenerate`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}
module.exports = UsageChunkResource;
