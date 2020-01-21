/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
const {
  pickBy,
  isEmpty,
  replace,
  complement,
} = require('ramda');

const { filterToQuery } = require('../rql');

/**
 * Append parameters to the querystring.
 *
 * @param   {string}         url      The URL to which append the parameters.
 * @param   {string|Object}  params   An plain object of paramers or a partial querystring.
 *
 * @return  {string}          The modified URL with querystring parameters.
 */

const notEmpty = complement(isEmpty);

const buildUrl = (url, queryParams = {}) => {
  const filteredParams = pickBy(notEmpty, queryParams);
  const query = filterToQuery(filteredParams);
  return replace(/\?$/, '', `${url}?${query}`);
};

module.exports = { buildUrl };
