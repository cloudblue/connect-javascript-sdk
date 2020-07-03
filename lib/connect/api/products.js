/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');

const GenericResource = require('./base');
const { buildUrl } = require('./utils');
/**
 * The *ProductActionResource* class provides methods to access the
 * *Action* objects for a product.
 *
 * @category Resources
 */
class ProductActionResource extends GenericResource {
  /**
   * Returns the *ActionLink* object for a product and asset.
   *
   * @param   {string}  id       The unique identifier of the *Action*.
   * @param   {string}  assetId  The unique identifier of the *Asset*.
   *
   * @returns  {object}           The *ActionLink* object.
   */
  async link(id, assetId) {
    let url = `${this.baseUri}/${id}/actionLink`;
    url = buildUrl(url, { asset_id: assetId });
    const response = await this.fetch(url);
    return response.json();
  }
}

/**
 * The *ProductVersionResource* class provides methods to access the
 * *Version* objects for a product.
 *
 * @extends GenericResource
 * @category Resources
 */
class ProductVersionResource extends GenericResource {
  /**
   * Creates a new instance of the *ProductVersionResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the *ConnectClient* class.
   * @param   {string}         baseUri The base uri for this resource.
   *
   * @returns  {ProductVersionResource}  An instance of the *ProductVersionResource* class.
   */
  constructor(client, baseUri) {
    super(client, baseUri);
    this.actions = memoizeWith(identity, this.actions);
  }

  /**
   * Returns an instance of the *ProductActionResource* class
   * to access the *Action* objects configured for a specific
   * version of a *Product*.
   *
   * @param   {string}  id              The unique identifier of the *Version* object
   *                                    for a *Product*.
   *
   * @returns  {ProductActionResource}  The instance of the *ProductActionResource*
   *                                    class for a product/version.
   */
  actions(id) {
    return new ProductActionResource(this._client, `${this.baseUri}/${id}/actions`);
  }
}

/**
 * The *ProductConfigurationResource* class provides methods to access the
 * *ProductConfiguration* objects for a product.
 *
 * @extends GenericResource
 * @category Resources
 */
class ProductConfigurationResource extends GenericResource {}

/**
 * The *ProductResource* class provides methods to access the products
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class ProductResource extends GenericResource {
  /**
   * Creates a new instance of the *ProductResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the *ConnectClient* class.
   *
   * @returns  {ProductResource}  An instance of the *ProductResource* class.
   */
  constructor(client) {
    super(client, '/products');
    this.actions = memoizeWith(identity, this.actions);
    this.versions = memoizeWith(identity, this.versions);
    this.configurations = memoizeWith(identity, this.configurations);
  }

  /**
   * Returns an instance of the *ProductActionResource* for a *Product*.
   *
   * @param   {string}  id  The unique identifier of the *Product*.
   *
   * @returns  {ProductActionResource}  An instance of the *ProductActionResource*
   *                                    for the product.
   */
  actions(id) {
    return new ProductActionResource(this._client, `${this.baseUri}/${id}/actions`);
  }


  /**
   * Returns an instance of the *ProductVersionResource* for a *Product*.
   *
   * @param   {string}  id               The unique identifier of the *Product*.
   *
   * @returns  {ProductVersionResource}  An instance of the *ProductVersionResource*
   *                                     for the product.
   */
  versions(id) {
    return new ProductVersionResource(this._client, `${this.baseUri}/${id}/versions`);
  }


  /**
   * Returns an instance of the *ProductConfigurationResource* for a *ProductConfiguration*.
   *
   * @param   {string}  id                     The unique identifier of the *Product*.
   *
   * @returns  {ProductConfigurationResource}  An instance of the *ProductConfigurationResource*
   *                                           for the product.
   */
  configurations(id) {
    return new ProductConfigurationResource(this._client, `${this.baseUri}/${id}/configurations`);
  }

  /**
   * Returns the list of *Template* objects configured for the *Product*.
   *
   * @param   {string}  id  The unique identifier of the *Product*.
   *
   * @returns  {Array}  The list of *Template* objects.
   */
  async getTemplates(id) {
    const url = `${this.baseUri}/${id}/templates`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the list of *Parameter* objects configured for the *Product*.
   *
   * @param   {string}  id  The unique identifier of the *Product*.
   *
   * @returns  {Array}  The list of *Parameter* objects.
   */
  async getParameters(id) {
    const url = `${this.baseUri}/${id}/parameters`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the *Parameter* objects configured for the parameterId.
   *
   * @param   {string}  productId  The unique identifier of the *Product*.
   * @param   {string}  paramId  The unique identifier of the *Param*.
   *
   * @returns  {Array}  The list of *Parameter* objects.
   */
  async getParameter(productId, paramId) {
    const url = `${this.baseUri}/${productId}/parameters/${paramId}`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Create *Parameter* object for the *Product*.
   *
   * @param   {string}  productId  The unique identifier of the *Product*.
   * @param   {string}  obj  The object that describes the parameter.
   *
   * @returns  {Array}  The list of *Parameter* objects.
   */
  async createParameter(productId, obj) {
    const url = `${this.baseUri}/${productId}/parameters`;
    const body = {
      method: 'POST',
      body: obj,
    };
    const response = await this.fetch(url, body);
    return response.json();
  }

  /**
   * Update *Parameter* object for the *Product*.
   *
   * @param   {string}  productId  The unique identifier of the *Product*.
   * @param   {string}  paramId  The unique identifier of the *Param*.
   * @param   {string}  obj  The object that describes the parameter.
   *
   * @returns  {Array}  The list of *Parameter* objects.
   */
  async updateParameter(productId, paramId, obj) {
    const url = `${this.baseUri}/${productId}/parameters/${paramId}`;
    const body = {
      method: 'PUT',
      body: obj,
    };
    const response = await this.fetch(url, body);
    return response.json();
  }

  /**
   * Delete *Parameter* object for the *Product*.
   *
   * @param   {string}  productId  The unique identifier of the *Product*.
   * @param   {string}  paramId  The unique identifier of the *Param*.
   *
   * @returns  {Array}  The list of *Parameter* objects.
   */
  async deleteParameter(productId, paramId) {
    const url = `${this.baseUri}/${productId}/parameters/${paramId}`;
    const body = {
      method: 'DELETE',
    };
    const response = await this.fetch(url, body);
    return response.json();
  }

  /**
   * Returns the list of *ProductItem* objects configured for the *Product*.
   *
   * @param   {string}  id  The unique identifier of the *Product*.
   *
   * @returns  {Array}  The list of *ProductItem* objects.
   */
  async getItems(id) {
    const url = `${this.baseUri}/${id}/items`;
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Returns the list of *Connection* objects configured for the *Product*.
   *
   * @param   {string}  id  The unique identifier of the *Product*.
   *
   * @returns  {Array}  The list of *Connection* objects.
   */
  async getConnections(id) {
    const url = `${this.baseUri}/${id}/connections`;
    const response = await this.fetch(url);
    return response.json();
  }
}

module.exports = ProductResource;
