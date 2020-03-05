/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */
const {
  pickBy,
  isEmpty,
  replace,
  complement,
} = require('ramda');

const { filterToQuery } = require('../rql');

const notEmpty = complement(isEmpty);

const buildUrl = (url, queryParams = {}) => {
  const filteredParams = pickBy(notEmpty, queryParams);
  const query = filterToQuery(filteredParams);
  return replace(/\?$/, '', `${url}?${query}`);
};

module.exports = { buildUrl };
