/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const BaseService = require('./base');

/**
* The ProductActionService class provides methods to access the
* ``Action`` objects for a product.
*/
class ProductActionService extends BaseService {
  /**
   * Returns the ``ActionLink`` object for a product and asset.
   *
   * @param   {string}  id       The unique identifier of the ``Product``.
   * @param   {string}  assetId  The unique identifier of the ``Asset``.
   *
   * @return  {Object}           The ``ActionLink`` object.
   */
  async link(id, assetId) {
    let url = `${this.baseUri}/${id}/actionLink`;
    url = this.appendToQuerystring(url, { asset_id: assetId });
    const response = await this.fetch(url);
    return response.json();
  }
}

/**
* The ProductVersionService class provides methods to access the
* ``Version`` objects for a product.
*/
class ProductVersionService extends BaseService {
  /* eslint-disable max-len */
  /**
   * Returns an instance of the ``ProductActionService`` class
   * to access the ``Action`` objects configured for a specific
   * version of a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Version`` object for a ``Product``.
   *
   * @return  {ProductActionService}      The instance of the ``ProductActionService`` class for a product/version.
   */
  actions(id) { /* eslint-enable max-len */
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }
}

/**
* The ProductService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class ProductService extends BaseService {
  /**
   * Creates a new instance of the ``ProductService`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {ProductService}  An instance of the ``ProductService`` class.
   */
  constructor(client) {
    super(client, '/products');
  }

  /**
   * Returns an instance of the ``ProductActionService`` for a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {ProductActionService}  An instance of the ``ProductActionService`` for the product.
   */
  actions(id) {
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }

  /* eslint-disable max-len */

  /**
   * Returns an instance of the ``ProductVersionService`` for a ``Product``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {ProductVersionService}  An instance of the ``ProductVersionService`` for the product.
   */
  versions(id) { /* eslint-enable max-len */
    return new ProductVersionService(this._client, `${this.baseUri}/${id}/versions`);
  }

  /**
   * Returns an instance of the ``BaseService`` for a ``ProductConfiguration``.
   *
   * @param   {string}  id  The unique identifier of the ``Product``.
   *
   * @return  {BaseService}  An instance of the ``BaseService`` for the product.
   */
  configurations(id) {
    return new BaseService(this._client, `${this.baseUri}/${id}/configurations`);
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


module.exports = ProductService;
