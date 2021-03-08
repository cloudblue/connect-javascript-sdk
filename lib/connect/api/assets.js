/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');
const GenericResource = require('./base');

/**
 * The *AssetUsageAgregatesResource* class provides methods to access the
 * *AssetUsageAgregates* objects for a asset.
 *
 * @extends GenericResource
 * @category Resources
 */
class AssetUsageAgregatesResource extends GenericResource {}

/**
 * The *AssetResource* class provides methods to access the assets
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class AssetResource extends GenericResource {
  /**
   * Creates a new instance of the *AssetResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the *ConnectClient* class.
   *
   * @returns  {AssetResource}  An instance of the *AssetResource* class.
   */
  constructor(client) {
    super(client, '/assets');
    this.usageAgregates = memoizeWith(identity, this.usageAgregates);
  }

  /**
   * Returns an instance of the *AssetUsageAgregatesResource* for a *Asset*.
   *
   * @param   {string}  id                     The unique identifier of the *Product*.
   *
   * @returns  {AssetUsageAgregatesResource}   An instance of the *AssetUsageAgregatesResource*
   *                                           for the asset.
   */
  usageAgregates(id) {
    return new AssetUsageAgregatesResource(this._client, `${this.baseUri}/${id}/usage/agregates`);
  }
}

module.exports = AssetResource;
