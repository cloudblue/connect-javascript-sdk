/*
 * This file is part of the CloudBlue Connect SDK.
 *
 * @copyright (c) 2025 CloudBlue. All Rights Reserved.
 */

const {
  type,
  pipe,
  equals,
  isEmpty,
  isNil,
  anyPass,
  curry,
} = require('ramda');

const isObjectStrict = pipe(type, equals('Object'));
const isNilOrEmpty = anyPass([isEmpty, isNil]);
const alt = curry((t, f, c) => (c ? t : f));


module.exports = {
  isObjectStrict,
  isNilOrEmpty,
  alt,
};
