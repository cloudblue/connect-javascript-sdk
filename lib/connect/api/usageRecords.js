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
class UsageRecordResource extends GenericResource {
  /**
   * Creates a new instance of the *UsageRecordResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {UsageRecordResource}  An instance of the *UsageFileResource* class.
   */
  constructor(client) {
    super(client, '/usage/records');
  }

  /**
   * Close all *Record File*.
   *
   * @param   {string}  id                  The unique identifier of the *Usage File*.
   * @param   {string} externalBillingId    Id of the billing to close record
   * @param   {string} externalBillingNote  Note of the billing to close record
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
   * Close Records *Record File*.
   *
   * @param   {string} id                   The unique identifier of the *Usage File*.
   * @param   {string} recordId             Id of the record to  close
   * @param   {string} externalBillingId    Id of the billing to close record
   * @param   {string} externalBillingNote  Note of the billing to close record
   * @returns {UsageChunkResource}          An instance of the *UsageChunkResource*.
   *
   */
  async closeRecords(id, recordId, externalBillingId, externalBillingNote) {
    const url = `${this.baseUri}/${id}/close-records`;
    const options = {
      method: 'POST',
      body: {
        id: recordId,
        external_billing_id: externalBillingId,
        external_billing_note: externalBillingNote,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}
module.exports = UsageRecordResource;
