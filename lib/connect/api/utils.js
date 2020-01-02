/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');

/* eslint-disable no-param-reassign */
const addFilterParam = (params, name, value) => {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    params[`${name}__in`] = value.join();
  } else if (typeof value === 'string') {
    params[name] = value;
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    params[name] = `${value}`;
  } else {
    throw new Error(`Parameters of type ${typeof value} are not supported`);
  }
};

const addOrderingParam = (params, value) => {
  if (Array.isArray(value)) {
    params.order_by = value.join();
  } else if (typeof value === 'string') {
    params.order_by = value;
  }
};

const rql2legacy = (query) => {
  const params = {};
  if (query) {
    switch (query.name) {
      case 'eq':
        // eslint-disable-next-line prefer-destructuring
        params[query.args[0]] = query.args[1];
        break;
      case 'in':
        params[`${query.args[0]}__in`] = query.args.slice(1).join();
        break;
      case 'lte':
      case 'gte':
      case 'lt':
      case 'gt':
        // eslint-disable-next-line prefer-destructuring
        params[`${query.args[0]}__${query.name}`] = query.args[1];
        break;
      case 'and':
        query.args.forEach((q) => {
          _.extend(params, rql2legacy(q));
        });
        break;
      default:
        throw new Error(`operator ${query.name} not supported`);
    }
  }
  return params;
};

module.exports = { addFilterParam, addOrderingParam, rql2legacy };
