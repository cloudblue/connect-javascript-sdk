/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const { buildUrl } = require('../../../lib/connect/api/utils');

describe('Connect Javascript SDK - utils', () => {
  it('buildUrl append parameters to querystring', (done) => {
    const url = 'http://example.com';
    const params = {
      string_param: 'string',
      number_param: 3,
      boolean_param: true,
      array_param: ['a', 'b', 'c']
    };
    const computed = buildUrl(url, params);
    computed.should.be.eql('http://example.com?string_param=string&number_param=3&boolean_param=true&array_param=a,b,c');
    done();
  });
  it('buildUrl returns an unmodified url if no params', (done) => {
    const url = 'http://example.com';
    const computed = buildUrl(url);
    computed.should.be.eql(url);
    done();
  });
});