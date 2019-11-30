/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const { AbstractHttpAdapter } = require('../../../index');
const { DefaultHttpAdapter } = require('../../../lib/connect/http/adapter');

describe('Connect Javascript SDK - AbstractHttpAdapter', () => {
    it('constructor throw an error', () => {
        should(() => new AbstractHttpAdapter()).throw(Error);
    });
    it('prepareRequest should throw an error if not overridden', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        should(() => ta.prepareRequest('url', {})).throw(Error);
    });
    it('parseResponse should throw an error if not overridden', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        should(() => ta.parseResponse({})).throw(Error);
    });
    it('beforeRequest should set/get a list of middlewares', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        const myfun = () => {};
        ta.beforeRequest = [myfun];
        ta.beforeRequest.should.eql([myfun]);
    });
    it('beforeRequest should be an empty array', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        ta.beforeRequest = null;
        ta.beforeRequest.should.be.empty();
    });
    it('afterResponse should set/get a list of middlewares', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        const myfun = () => {};
        ta.afterResponse = [myfun];
        ta.afterResponse.should.eql([myfun]);
    });
    it('afterResponse should be an empty array', () => {
        class TestAdapter extends AbstractHttpAdapter {}
        const ta = new TestAdapter();
        ta.afterResponse = null;
        ta.afterResponse.should.be.empty();
    });
});
