/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const { Query } = require('rql/query');
const { rql2drf } = require('../../../lib/connect/api/helpers');



describe('Connect Javascript SDK - Utils', () => {
  it('rql2drf throw an error if there is an unsupported operator', (done) => {
    should(() => rql2drf(new Query().or(new Query().eq('a', 0), new Query().eq('b', 1)))).throw(Error);
    done();
  });
  it('rql2drf accept string input', (done) => {
    const params = rql2drf('and(eq(a,0),eq(b,1),eq(test,ok),eq(bool,true))');
    params.should.be.an.Object();
    params.should.have.property('a').eql(0);
    params.should.have.property('b').eql(1);
    params.should.have.property('test').eql('ok');
    params.should.have.property('bool').eql(true);
    done();
  });
});