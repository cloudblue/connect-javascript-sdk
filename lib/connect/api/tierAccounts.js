/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');

const GenericResource = require('./base');

/**
 * The *TierAccountVersionResource* class provides methods to access the
 * *Version* objects for a tier account.
 *
 * @extends GenericResource
 * @category Resources
 */
class TierAccountVersionResource extends GenericResource {}

/**
 * The *TierAccountResource* class provides methods to access the tier accounts
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class TierAccountResource extends GenericResource {
  /**
   * Creates a new instance of the *TierAccountResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {TierAccountResource}  An instance of the *TierAccountResource* class.
   */
  constructor(client) {
    super(client, '/tier/accounts');
    this.versions = memoizeWith(identity, this.versions);
  }

  /**
   * Returns an instance of the *TierAccountVersionResource* for a *TierAccount*.
   *
   * @param   {string}  id               The unique identifier of the *TierAccount*.
   *
   * @returns  {TierAccountVersionResource}  An instance of the *TierAccountVersionResource*
   *                                     for the product.
   */
  versions(id) {
    return new TierAccountVersionResource(this._client, `${this.baseUri}/${id}/versions`);
  }
}

module.exports = TierAccountResource;
