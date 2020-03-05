/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable arrow-parens */

const {
  curry,
  ifElse,
  includes,
  identity,
  is,
  forEachObjIndexed,
  flatten,
  map,
  pipe,
  keys,
  objOf,
  of,
  test,
  join,
  replace,
  reject,
  unless,
  __,
} = require('ramda');

const {
  isObjectStrict,
  isNilOrEmpty,
  alt,
} = require('./utils');


const RQL_EXPRESSIONS = {
  AND: '$and',
  EQ: '$eq',
  NE: '$ne',
  GT: '$gt',
  GTE: '$gte',
  LT: '$lt',
  LTE: '$lte',
  LIKE: '$like',
  ILIKE: '$ilike',
  IN: '$in',
  OUT: '$out',
  RANGE: '$range',
  NOT: '$not',
  OR: '$or',
  SELECT: '$select',
  ORDERING: '$ordering',
};

const isControlRqlExp = includes(__, [
  RQL_EXPRESSIONS.SELECT,
  RQL_EXPRESSIONS.ORDERING,
]);

const quotize = unless(test(/^([\w\-*+\\][\w.\-:+@*\\]*|null\(\)|empty\(\))$/g), v => `"${v}"`);
const $operation = replace(/^\$/g, '');
const $value = ifElse(
  Array.isArray,
  pipe(
    map(quotize),
    join(','),
  ),
  quotize,
);

const $query = curry((valueFormatter, field, operation, value) => alt(
  '',
  `${$operation(operation)}(${field},${valueFormatter(value)})`,
  isNilOrEmpty(value),
));

const qRel = $query($value);
const qEq = (field, value) => alt('', `${field}=${$value(value)}`, isNilOrEmpty(value));
const qText = $query(unless(isNilOrEmpty, v => $value(`*${replace(/\*/g, '\\*', v)}*`)));
const qList = $query(v => `(${$value(v)})`);
const qRange = $query(({ min, max }) => `${min},${max}`);
const qOr = values => values.reduce((acc, v) => alt(
  acc,
  alt(`(${v})`, `(${acc}|${v})`, isNilOrEmpty(acc)),
  isNilOrEmpty(v),
));

const qWrap = (operation, value, formatter = identity) => alt(
  '',
  `${$operation(operation)}(${formatter(value)})`,
  isNilOrEmpty(value),
);

const qAnd = pipe(
  reject(isNilOrEmpty),
  join('&'),
);


/* eslint-disable no-use-before-define */
const toWrappedQueries = (field, operation, rqlFilters) => pipe(
  unless(is(Array), of),
  reject(isNilOrEmpty),
  map(rqlFilter => map((subKey) => {
    const subRql = objOf(subKey, rqlFilter[subKey]);
    const subQuery = rqlToQuery(subRql, field);

    return qWrap(operation, subQuery);
  }, keys(rqlFilter))),
  flatten,
)(rqlFilters);


const toWrappedQuery = pipe(
  filterToQuery,
  unless(isNilOrEmpty, v => `(${v})`),
);

/* eslint-disable no-use-before-define */
/* eslint-disable no-case-declarations */
/* eslint-disable jsdoc/require-jsdoc */
function rqlToQuery(rql, field) {
  const rqlFilter = [];

  const toSubQueries = map(pipe(
    objOf(field),
    toWrappedQuery,
  ));

  forEachObjIndexed((value, operation) => {
    if (isNilOrEmpty(value)) return;

    switch (operation) {
      // Text matching
      case RQL_EXPRESSIONS.LIKE:
      case RQL_EXPRESSIONS.ILIKE:
        rqlFilter.push(qText(field, operation, value));
        break;

      // List matching
      case RQL_EXPRESSIONS.IN:
      case RQL_EXPRESSIONS.OUT:
        rqlFilter.push(qList(field, operation, value));
        break;

      // Range matching
      case RQL_EXPRESSIONS.RANGE:
        rqlFilter.push(qRange(field, operation, value));
        break;

      // Logical OR
      case RQL_EXPRESSIONS.OR:
        rqlFilter.push(qOr(toSubQueries(value)));
        break;

      // Logical AND
      case RQL_EXPRESSIONS.AND:
        rqlFilter.push(qAnd(toSubQueries(value)));
        break;

      // Logical NOT
      case RQL_EXPRESSIONS.NOT:
        rqlFilter.push(...toWrappedQueries(field, operation, value));
        break;

      // Relationals
      default:
        rqlFilter.push(qRel(field, operation, value));
    }
  })(rql);

  return qAnd(rqlFilter);
}

function filterToQuery(f) {
  const result = [];

  const toSubQueries = map(toWrappedQuery);

  forEachObjIndexed((value, key) => {
    if (isNilOrEmpty(value)) return;

    if (isObjectStrict(value)) {
      result.push(rqlToQuery(value, key));
    } else if (key === RQL_EXPRESSIONS.OR) {
      result.push(qOr(toSubQueries(value)));
    } else if (key === RQL_EXPRESSIONS.AND) {
      result.push(qAnd(toSubQueries(value)));
    } else if (isControlRqlExp(key)) {
      result.push(qWrap(key, value, $value));
    } else {
      result.push(qEq(key, value));
    }
  }, f);

  return qAnd(result);
}

module.exports = {
  RQL_EXPRESSIONS,
  filterToQuery,
  rqlToQuery,
};
