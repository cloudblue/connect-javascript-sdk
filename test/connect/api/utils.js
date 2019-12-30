/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const { addFilterParam, addOrderingParam } = require('../../../lib/connect/api/utils');

describe('Connect Javascript SDK - utils', () => {
    it('addFilterParam returns an Object with string parameter', (done) => {
        const params = {};
        addFilterParam(params, 'test', 'string');
        params.should.have.property('test').eql('string');
        done();
    });
    it('addFilterParam returns an Object with array parameter', (done) => {
        const params = {};
        addFilterParam(params, 'test', ['a', 'b']);
        params.should.have.property('test__in').eql('a,b');
        done();
    });
    it('addFilterParam returns an Object with number parameter', (done) => {
        const params = {};
        addFilterParam(params, 'test', 3);
        params.should.have.property('test').eql('3');
        done();
    });
    it('addFilterParam throw an Error if parameter is of unsupported type', (done) => {
        const params = {};
        should(() => addFilterParam(params, 'test', {})).throw('Parameters of type object are not supported');
        done();
    }); 
});
