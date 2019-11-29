/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');

/**
 * This abstract class allow ....
 */

class AbstractHttpAdapter {
    /**
     * Create a subclass of AbstractHttpAdapter
     * 
     * @param {Function} fetch the fetch function used to make the actual http call. 
     */
    constructor(fetch) {
        if (this.constructor == AbstractHttpAdapter) {
            throw new Error('HttpAdapter is abstract. You must subclass it!');
        }
        this._fetch = fetch;
        this._before = [];
        this._after = [];
    }
    /**
     * 
     */
    get beforeRequest() {
        return this._before;
    }
    /**
     * 
     */
    set beforeRequest(middlewares) {
        this._before = middlewares || [];
    }

    get afterResponse() {
        return this._after;
    }
    set afterResponse(middlewares) {
        this._after = middlewares || [];
    }

    prepareRequest(url, options) {
        throw new Error('Concrete class must implement this method!');
    }
    parseResponse(response) {
        throw new Error('Concrete class must implement this method!');
    }

    fetch(url, options) {
        options = options || {};
        _.forEach(this._before, middleware => {
            let result = middleware(url, options);
            url = result.url;
            options = result.options;
        });
        const req = this.prepareRequest(url, options);
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

class DefaultHttpAdapter extends AbstractHttpAdapter {
    constructor() {
        super(require('node-fetch'));
    }
    prepareRequest(url, options) {
        return {url: url, options: options};
    }
    parseResponse(response) {
        return response;
    }
}

module.exports = {
    AbstractHttpAdapter: AbstractHttpAdapter,
    DefaultHttpAdapter: DefaultHttpAdapter
};
