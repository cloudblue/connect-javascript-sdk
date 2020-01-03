/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');

/* eslint-disable prefer-destructuring */
const rql2legacy = (query) => {
  const params = {};
  if (query) {
    switch (query.name) {
      case 'eq':
        params[query.args[0]] = query.args[1];
        break;
      case 'in':
        params[`${query.args[0]}__in`] = query.args.slice(1).join();
        break;
      case 'lt':
      case 'gt':
        params[`${query.args[0]}__${query.name}`] = query.args[1];
        break;
      case 'le':
        params[`${query.args[0]}__lte`] = query.args[1];
        break;
      case 'ge':
        params[`${query.args[0]}__gte`] = query.args[1];
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

module.exports = { rql2legacy };
