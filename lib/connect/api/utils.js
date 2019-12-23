/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable no-param-reassign */
const addFilterParam = (params, name, value) => {
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    params[`${name}__in`] = value.join();
  } else if (typeof value === 'string') {
    params[name] = value;
  } else {
    params[name] = `${value}`;
  }
};

const addOrderingParam = (params, value) => {
  if (Array.isArray(value)) {
    params.order_by = value.join();
  } else if (typeof value === 'string') {
    params.order_by = value;
  }
};

module.exports = { addFilterParam, addOrderingParam };
