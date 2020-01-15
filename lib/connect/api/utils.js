/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

// const _ = require('lodash');

const _ = require('lodash');
const querystring = require('querystring');

/**
 * Append parameters to the querystring.
 *
 * @param   {string}         url      The URL to which append the parameters.
 * @param   {string|Object}  params   An plain object of paramers or a partial querystring.
 *
 * @return  {string}          The modified URL with querystring parameters.
 */
const buildUrl = (url, params) => {
  let computedUrl = url;
  if (params) {
    const separator = url.includes('?') ? '&' : '?';
    if (typeof params === 'string') {
      computedUrl += `${separator}${params}`;
    } else if (_.isPlainObject(params)) {
      const arrayToString = (value) => (Array.isArray(value) ? value.join() : value);
      const qsParams = querystring.stringify(_.mapValues(params, arrayToString));
      if (qsParams) {
        computedUrl += `${separator}${qsParams}`;
      }
    } else {
      throw new Error('Only strings and plain objects are supported.');
    }
  }
  return computedUrl;
};

module.exports = { buildUrl };
