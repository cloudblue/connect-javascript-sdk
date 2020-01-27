/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');

const GenericResource = require('./base');
const { buildUrl } = require('./utils');
/**
* The ``ProductActionResource`` class provides methods to access the
* ``Action`` objects for a product.
* @inside API
*/
class ProductActionResource extends GenericResource {
  /**
   * Returns the ``ActionLink`` object for a product and asset.
   *
   * @param   {string}  id       The unique identifier of the ``Action``.
   * @param   {string}  assetId  The unique identifier of the ``Asset``.
   *
   * @return  {Object}           The ``ActionLink`` object.
   */
  async link(id, assetId) {
    let url = `${this.baseUri}/${id}/actionLink`;
    url = buildUrl(url, { asset_id: assetId });
    const response = await this.fetch(url);
    return response.json();
  }
}

/**
* The ``ProductVersionResource`` class provides methods to access the
* ``Version`` objects for a product.
*
* @extends GenericResource
* @inside API
*/
class ProductVersionResource extends GenericResource {
  /**
   * Creates a new instance of the ``ProductVersionResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ``ConnectClient`` class.
   *
   * @return  {ProductVersionResource}  An instance of the ``ProductVersionResource`` class.
   */
  constructor(client, baseUri) {
    super(client, baseUri);
    this.actions = memoizeWith(identity, this.actions);
  }

  /* eslint-disable max-len */
  /**
   * Returns an instance of the ``ProductActionResource`` class
   * to access the ``Action`` objects configured for a specific
   * version of a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Version`` object for a ``Product``.
   *
   * @return  {ProductActionResource} The instance of the ``ProductActionResource`` class for a product/version.
   */
  actions(id) { /* eslint-enable max-len */
    return new ProductActionResource(this._client, `${this.baseUri}/${id}/actions`);
  }
}

/**
* The ``ProductConfigurationResource`` class provides methods to access the
* ``ProductConfiguration`` objects for a product.
*
* @extends GenericResource
* @inside API
*/
class ProductConfigurationResource extends GenericResource {}

/**
* The ``ProductResource`` class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*
* @extends GenericResource
* @inside API
*/
class ProductResource extends GenericResource {
  /**
   * Creates a new instance of the ``ProductResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ``ConnectClient`` class.
   *
   * @return  {ProductResource}  An instance of the ``ProductResource`` class.
   */
  constructor(client) {
    super(client, '/products');
    this.actions = memoizeWith(identity, this.actions);
    this.versions = memoizeWith(identity, this.versions);
    this.configurations = memoizeWith(identity, this.configurations);
  }

  /**
   * Returns an instance of the ``ProductActionResource`` for a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {ProductActionResource}  An instance of the ``ProductActionResource`` for the product.
   */
  actions(id) {
    return new ProductActionResource(this._client, `${this.baseUri}/${id}/actions`);
  }

  /* eslint-disable max-len */

  /**
   * Returns an instance of the ``ProductVersionResource`` for a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {ProductVersionResource}  An instance of the ``ProductVersionResource`` for the product.
   */
  versions(id) { /* eslint-enable max-len */
    return new ProductVersionResource(this._client, `${this.baseUri}/${id}/versions`);
  }

  /* eslint-disable max-len */

  /**
   * Returns an instance of the ``ProductConfigurationResource`` for a ``ProductConfiguration``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {ProductConfigurationResource}  An instance of the ``ProductConfigurationResource`` for the product.
   */
  configurations(id) { /* eslint-enable max-len */
    return new ProductConfigurationResource(this._client, `${this.baseUri}/${id}/configurations`);
  }

  /**
   * Returns the list of ``Template`` objects configured for the ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {Array}  The list of ``Template`` objects.
   */
  async getTemplates(id) {
    const url = `${this.baseUri}/${id}/templates`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the list of ``Parameter`` objects configured for the ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {Array}  The list of ``Parameter`` objects.
   */
  async getParameters(id) {
    const url = `${this.baseUri}/${id}/parameters`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the list of ``ProductItem`` objects configured for the ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {Array}  The list of ``ProductItem`` objects.
   */
  async getItems(id) {
    const url = `${this.baseUri}/${id}/items`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the list of ``Connection`` objects configured for the ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {Array}  The list of ``Connection`` objects.
   */
  async getConnections(id) {
    const url = `${this.baseUri}/${id}/connections`;
    const response = await this.fetch(url);
    return response.json();
  }
}

module.exports = ProductResource;
