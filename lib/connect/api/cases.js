/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');
const GenericResource = require('./base');

/**
 * The *CaseAttachmentResources* class provides methods to access the
 * *attachment* objects for a case.
 *
 * @extends GenericResource
 * @category Resources
 */
class CaseAttachmentsResource extends GenericResource {}

/**
 * The *CaseSettingsResources* class provides methods to access the
 * *setting* objects for a case.
 *
 * @extends GenericResource
 * @category Resources
 */
class CaseSettingsResource extends GenericResource {}

/**
 * The *CaseResource* class provides methods to access the case
 * endpoint of the CloudBlue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class CaseResource extends GenericResource {
  /**
   * Creates a new instance of the *CaseResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {CaseResource}  An instance of the *CaseResource* class.
   */
  constructor(client) {
    super(client, '/helpdesk/cases');
    this.attachments = memoizeWith(identity, this.attachments);
    this.settings = memoizeWith(identity, this.settings);
  }

  /**
   * Returns an instance of the *CaseAttachmentsResource* for a *Case*.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseAttachmentsResource}  An instance of the *CaseAttachmentsResource*
   *                                     for the case.
   */
  attachments(id) {
    return new CaseAttachmentsResource(this._client, `${this.baseUri}/${id}/attachments`);
  }

  /**
   * Returns an instance of the *CaseSettinsResource* for a *Case*.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseSettingsResource}  An instance of the *CaseSettingsResource*
   *                                     for the case.
   */
  settings(id) {
    return new CaseSettingsResource(this._client, `${this.baseUri}/${id}/settings`);
  }

  /**
   * Set *Case* to pend status.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseCommentsResource}  An instance of the *CaseCommentsResource*
   *                                     for the case.
   */
  async pend(id) {
    const url = `${this.baseUri}/${id}/pend`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return (response);
  }

  /**
   * Set *Case* to inquire status.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseCommentsResource}  An instance of the *CaseCommentsResource*
   *                                     for the case.
   */
  async inquire(id) {
    const url = `${this.baseUri}/${id}/inquire`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return (response);
  }

  /**
   * Set *Case* to resolve status.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseCommentsResource}  An instance of the *CaseCommentsResource*
   *                                     for the case.
   */
  async resolve(id) {
    const url = `${this.baseUri}/${id}/resolve`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return (response);
  }

  /**
   * Set *Case* to close status.
   *
   * @param   {string}  id               The unique identifier of the *Case*.
   *
   * @returns  {CaseCommentsResource}  An instance of the *CaseCommentsResource*
   *                                     for the case.
   */
  async close(id) {
    const url = `${this.baseUri}/${id}/close`;
    const options = {
      method: 'POST',
    };
    const response = await this.fetch(url, options);
    return (response);
  }
}

module.exports = CaseResource;
