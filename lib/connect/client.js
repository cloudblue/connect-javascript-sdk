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
        this._request = adapter || new http.NodeFetchAdapter(require('node-fetch'));
        _.forOwn(api, (klazz, key) => {
            this[key] = new klazz((options) => {

                if (!_.has(options, 'headers')) {
                    options.headers = {};
                }
                options.headers.Authorization = this._apiKey;
                options.url = `${this._endpoint}${options.url}`;
                return this._request(options);
            });
        });
    }
}

module.exports = ConnectClient;
