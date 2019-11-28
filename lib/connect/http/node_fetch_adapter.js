/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');
const querystring = require('querystring');

const AbstractHttpAdapter = require('./adapter');

const hasParams = ({ params = {} }) => Object.keys(params).length;

const addParams = (options) => {
    if (hasParams(options)) {
        const separator = options.url.includes('?') ? '&' : '?';
        const qsParams = querystring.stringify(options.params);
        if (qsParams) {
            options.url += `${separator}${qsParams}`;
        }
    }
    delete options.params;
    return options;
}


class NodeFetchAdapter extends AbstractHttpAdapter {

    constructor(fetch) {
        super(fetch);
    }

    prepareRequest(options) {
        options = addParams(options);
        return {
            url: options.url,
            options: _.omit(options, 'url')
        }
    }
    parseResponse(response) {
        return response;
    }
}

module.exports = NodeFetchAdapter;