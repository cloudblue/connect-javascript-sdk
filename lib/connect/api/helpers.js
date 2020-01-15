/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const _ = require('lodash');
const { parseQuery } = require('rql/parser');

/* eslint-disable prefer-destructuring */
const rql2drf = (query) => {
  const params = {};
  let q = query;
  if (q) {
    if (typeof q === 'string') {
      q = parseQuery(q);
    }

    let limit;
    let offset;

    switch (q.name) {
      case 'eq':
        params[q.args[0]] = q.args[1];
        break;
      case 'in':
        params[`${q.args[0]}__in`] = q.args.slice(1).join();
        break;
      case 'lt':
      case 'gt':
        params[`${q.args[0]}__${q.name}`] = q.args[1];
        break;
      case 'le':
        params[`${q.args[0]}__lte`] = q.args[1];
        break;
      case 'ge':
        params[`${q.args[0]}__gte`] = q.args[1];
        break;
      case 'and':
        q.args.forEach((sq) => {
          _.extend(params, rql2drf(sq));
        });
        break;
      case 'limit':
        [limit, offset] = q.args;
        params.limit = limit;
        params.offset = offset || 0;
        break;
      case 'sort':
        params.order_by = q.args.join();
        break;
      default:
        throw new Error(`operator ${q.name} not supported`);
    }
  }
  return params;
};

module.exports = { rql2drf };
