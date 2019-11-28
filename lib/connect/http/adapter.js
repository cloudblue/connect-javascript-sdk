/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');

class AbstractHttpAdapter {
    constructor(fetch) {
        if (this.constructor == AbstractHttpAdapter) {
            throw new Error('HttpAdapter is abstract. You must subclass it!');
        }
        this._fetch = fetch;
        this._before = [];
        this._after = [];
    }
    get beforeRequest() {
        return this._before;
    }
    set beforeRequest(middlewares) {
        this._before = middlewares || [];
    }

    get afterResponse() {
        return this._after;
    }
    set afterResponse(middlewares) {
        this._after = middlewares || [];
    }

    prepareRequest(options) {
        throw new Error('Concrete class must implement this method!');
    }
    parseResponse(response) {
        throw new Error('Concrete class must implement this method!');
    }

    request(options) {
        _.forEach(this._before, middleware => {
            options = middleware(options);
        });
        const req = this.prepareRequest(options);
        return this._fetch(req.url, req.options)
        .then(response => {
            response.options = options;
          return response;
        })
        .then(this.parseResponse)
        .then(response => {
            _.forEach(this._after, middleware => {
                response = middleware(response);
            })
            return response;
        });
    }
}

module.exports = AbstractHttpAdapter;
