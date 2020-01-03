/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const { Query } = require('rql/query');
const { rql2legacy } = require('../../../lib/connect/api/utils');



describe('Connect Javascript SDK - Utils', () => {
  it('rql2legacy throw an error if there is an unsupported operator', () => {
    should(() => rql2legacy(new Query().or(new Query().eq('a', 0), new Query().eq('b', 1)))).throw(Error);
  });
});