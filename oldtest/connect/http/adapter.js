/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const nock = require('nock');
const { AbstractHttpAdapter, DefaultHttpAdapter } = require('../../../lib/connect/http/adapter');

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

describe('Connect Javascript SDK - DefaultHttpAdapter', () => {
    it('prepareRequest should do nothing if body is neither an array nor a plain object', async () => {
        const options = {
            body: new Error('a'),
        };
        const adapter = new DefaultHttpAdapter();
        const req = adapter.prepareRequest('http://localhost', options);
        req.url.should.be.eql('http://localhost');
        req.options.should.be.eql(options);
    });
    it('prepareRequest should do nothing if no body', async () => {
        const options = {
        };
        const adapter = new DefaultHttpAdapter();
        const req = adapter.prepareRequest('http://localhost', options);
        req.url.should.be.eql('http://localhost');
        req.options.should.be.eql(options);
    });
    it('prepareRequest should stringify body if it is an array', async () => {
        const options = {
            body: []
        };
        const adapter = new DefaultHttpAdapter();
        const req = adapter.prepareRequest('http://localhost', options);
        req.url.should.be.eql('http://localhost');
        req.options.should.have.property('body').eql('[]');
    });
    it('prepareRequest should stringify body if it is a plain object', async () => {
        const options = {
            body: {
                a: 'b'
            }
        };
        const adapter = new DefaultHttpAdapter();
        const req = adapter.prepareRequest('http://localhost', options);
        req.url.should.be.eql('http://localhost');
        req.options.should.have.property('body').eql('{"a":"b"}');
    });
    it('prepareRequest should add header content-type=application/json if body is json serializable', async () => {
        const options = {
            body: {
                a: 'b'
            }
        };
        const adapter = new DefaultHttpAdapter();
        const req = adapter.prepareRequest('http://localhost', options);
        req.url.should.be.eql('http://localhost');
        req.options.should.have.property('headers');
        req.options.headers.should.be.an.Object();
        req.options.headers.should.have.property('Content-Type').eql('application/json');
    });
    it('fetch apply after response middleware', async () => {
        nock('http://localhost')
            .get('/')
            .reply(200, {a: 'b'});
        const adapter = new DefaultHttpAdapter();
        adapter.afterResponse = [(response) => {
            response.processed = true;
            return response;
        }];
        const response = await adapter.fetch('http://localhost');
        response.should.have.property('processed').eql(true);
    });
});