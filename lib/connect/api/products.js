/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const BaseService = require('./base');

class ProductActionService extends BaseService {
  async link(id, assetId) {
    let url = `${this.baseUri}/${id}/actionLink`;
    url = this.appendToQuerystring(url, { asset_id: assetId });
    const response = await this.fetch(url);
    return response.json();
  }
}

class ProductVersionService extends BaseService {
  actions(id) {
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }
}

/**
* The ProductService class provides methods to access the products
* endpoint of the Cloud Blue Connect API.
*/
class ProductService extends BaseService {
  constructor(client) {
    super(client, '/products');
  }

  actions(id) {
    return new ProductActionService(this._client, `${this.baseUri}/${id}/actions`);
  }

  versions(id) {
    return new ProductVersionService(this._client, `${this.baseUri}/${id}/versions`);
  }

  configurations(id) {
    return new BaseService(this._client, `${this.baseUri}/${id}/configurations`);
  }

  async getTemplates(id) {
    const url = `${this.baseUri}/${id}/templates`;
    const response = await this.fetch(url);
    return response.json();
  }

  async getParameters(id) {
    const url = `${this.baseUri}/${id}/parameters`;
    const response = await this.fetch(url);
    return response.json();
  }

  async getItems(id) {
    const url = `${this.baseUri}/${id}/items`;
    const response = await this.fetch(url);
    return response.json();
  }

  async getConnections(id) {
    const url = `${this.baseUri}/${id}/connections`;
    const response = await this.fetch(url);
    return response.json();
  }
}


module.exports = ProductService;
