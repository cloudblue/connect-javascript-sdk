/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');
const api = require('./api');

class ConnectClient {
    constructor(endpoint, apiKey, request) {
        this._endpoint = endpoint;
        this._apiKey = apiKey;
        this._request = request || require('axios').request;
        _.forOwn(api, (klazz, key) => {
            this[key] = new klazz((options) => {
                
                if (options.headers === undefined) {
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