/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');
const GenericResource = require('./base');

/**
 * The *CategoryUsageFileResource* class provides methods to access the
 * *categor* objects for a usage file.
 *
 * @extends GenericResource
 * @category Resources
 */
class CategoryUsageFileResource extends GenericResource {}

/**
 * The *UsageFileResource* class provides methods to access the usage file
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class UsageFileResource extends GenericResource {
  /**
   * Creates a new instance of the *UsageFileResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {UsageFileResource}  An instance of the *UsageFileResource* class.
   */
  constructor(client) {
    super(client, '/usage/files');
    this.categories = memoizeWith(identity, this.categories);
  }

  /**
   * Returns an instance of the *CategoryUsageFileResource* for a *UsageFile*.
   *
   * @param   {string}  id               The unique identifier of the *UsageFile*.
   *
   * @returns  {CategoryUsageFileResource}  An instance of the *CategoryUsageFileResource*
   *                                     for the case.
   */
  categories(id) {
    return new CategoryUsageFileResource(this._client, `${this.baseUri}/${id}/categories`);
  }

  /**
   * Accept *Usage File*.
   *
   * @param   {string}  id              The unique identifier of the *Usage File*.
   * @param   {string} acceptanceNote   Acceptance Note
   * @returns {UsageFileResource}       An instance of the *UsageFileResource*.
   *
   */
  async accept(id, acceptanceNote) {
    const url = `${this.baseUri}/${id}/accept`;
    const options = {
      method: 'POST',
      body: { acceptance_note: acceptanceNote },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Approve all *Usage File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageFileResource}   An instance of the *UsageFileResource*
   *
   */
  async approveAll(id) {
    const url = `${this.baseUri}/${id}/approve-all`;
    const options = {
      method: 'PUT',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Close *Usage File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageFileResource}   An instance of the *UsageFileResource*
   *
   */
  async close(id) {
    const url = `${this.baseUri}/${id}/close`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Delete *Usage File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageFileResource}   An instance of the *UsageFileResource*
   *
   */
  async delete(id) {
    const url = `${this.baseUri}/${id}/delete`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Reprocess *Usage File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageFileResource}   An instance of the *UsageFileResource*
   *
   */
  async reprocess(id) {
    const url = `${this.baseUri}/${id}/reprocess`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Submit *Usage File*.
   *
   * @param   {string}  id          The unique identifier of the *Usage File*.
   * @returns {UsageFileResource}   An instance of the *UsageFileResource*
   *
   */
  async submit(id) {
    const url = `${this.baseUri}/${id}/submit`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Reconciliation *Usage File*.
   *
   * @param   {string}  id              The unique identifier of the *Usage File*.
   * @param   {binary}  reconFile       Reconciliation binary file
   * @returns {UsageFileResource}       An instance of the *UsageFileResource*.
   *
   */
  async reconciliation(id, reconFile) {
    const url = `${this.baseUri}/${id}/reconciliation`;
    const options = {
      method: 'POST',
      body: { recon_file: reconFile },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Reject *Usage File*.
   *
   * @param   {string}  id              The unique identifier of the *Usage File*.
   * @param   {text}    rejectionNote   Rejection note
   * @returns {UsageFileResource}       An instance of the *UsageFileResource*.
   *
   */
  async reject(id, rejectionNote) {
    const url = `${this.baseUri}/${id}/reject`;
    const options = {
      method: 'POST',
      body: { rejection_note: rejectionNote },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }

  /**
   * Upload *Usage File*.
   *
   * @param   {string}  id              The unique identifier of the *Usage File*.
   * @param   {binary}  usageFile       File to upload
   * @returns {UsageFileResource}       An instance of the *UsageFileResource*.
   *
   */
  async upload(id, usageFile) {
    const url = `${this.baseUri}/${id}/upload`;
    const options = {
      method: 'POST',
      body: { usage_file: usageFile },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}
module.exports = UsageFileResource;
