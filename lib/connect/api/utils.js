/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');
const querystring = require('querystring');
const HttpError = require('./errors').HttpError;

const addParams = (url, params) => {
    if (params) {
        const separator = url.includes('?') ? '&' : '?';
        const qsParams = querystring.stringify(params);
        if (qsParams) {
            url += `${separator}${qsParams}`;
        }
    }
    return url;
}
const checkResponse = async response => {
    /* 
        Check content-type: if json => message = await response.json();
    */
    if (!response.ok) {
        throw new HttpError(response.status, await response.text());
    }
}

module.exports = {
    addParams: addParams,
    checkResponse: checkResponse
}