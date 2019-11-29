/**
* This file is part of the Ingram Micro Cloud Blue Connect SDK.
*
* @copyright (c) 2019. Ingram Micro. All Rights Reserved.
*/

const _ = require('lodash');
const http = require('./http');
const api = require('./api');


/**
* ConnectClient provides access to resouce endpoints of the Cloud Blue Connect Platform.
*/
class ConnectClient {
    /**
    * Creates a new instance of the Cloud Blue ConnectClient class.
    *
    * @param   {string}  endpoint  The base URL for API access.
    * @param   {string}  apiKey    The API key to authenticate with Connect.
    * @param   {http.AbstractHttpAdapter}  adapter An optional adapter.
    *
    * @return  {ConnectClient}     An instance of the ConnectClient class.
    */
    constructor(endpoint, apiKey, adapter) {
        this._endpoint = endpoint;
        this._apiKey = apiKey;
        this._adapter = adapter || new http.DefaultAdapter(require('node-fetch'));
        this._adapter.beforeRequest = [
          (url, options) => this.addEndpointPrefix(this._endpoint, url, options), 
          (url, options) => this.addAuthorizationHeader(this._apiKey, url, options), 
        ]
        _.forOwn(api, (klazz, key) => {
            this[key] = new klazz(this._adapter);
        });
    }
    addAuthorizationHeader(apiKey, url, options) {
      // console.log('add authorization header');
      return {
        url: url,
        options: _.merge(options, { headers: { Authorization: apiKey } })
      }
    }
    addEndpointPrefix(endpoint, url, options) {
      // console.log('add endpoint prefix');
      url = `${endpoint}${url}`;
      return {
        url: url,
        options: options
      }
    }
}


module.exports = ConnectClient;
