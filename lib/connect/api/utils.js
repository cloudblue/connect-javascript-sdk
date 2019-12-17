/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable no-param-reassign */
const addFilterParam = (params, name, value) => {
  if (Array.isArray(value)) {
    params[`${name}__in`] = value.join();
  } else if (typeof value === 'string') {
    params[name] = value;
  }
};

module.exports = { addFilterParam };
