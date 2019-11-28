const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const NodeFetchAdapter = require('../lib/connect/http').NodeFetchAdapter;

describe('Connect Javascript SDK - NodeFetchAdapter', () => {
    it('extract the url from the options', (done) => {
        const adapter = new NodeFetchAdapter();
        const prepared = adapter.prepareRequest({
            url: 'http://localhost',
            method: 'POST',
            body: {}
        });
        prepared.should.be.an.Object();
        prepared.should.have.property('url').eql('http://localhost');
        prepared.should.have.property('options');
        prepared.options.should.be.an.Object();
        prepared.options.should.not.have.property('url');
        done();
    });
    it('add parameters to querystring', (done) => {
        const adapter = new NodeFetchAdapter();
        const prepared = adapter.prepareRequest({
            url: 'http://localhost',
            method: 'POST',
            params: {
                id: 'id',
                status: 'status'
            },
            body: {}
        });
        prepared.should.be.an.Object();
        prepared.should.have.property('url').eql('http://localhost?id=id&status=status');
        prepared.options.should.be.an.Object();
        prepared.options.should.not.have.property('params');
        done();
    });
    it('invokes the beforeRequest middleware', (done) => {
        const adapter = new NodeFetchAdapter();
        adapter.beforeRequest = [
            options => {
                options.headers.Authorization = 'Bearer token'
            }
        ]
        const prepared = adapter.prepareRequest({
            url: 'http://localhost',
            method: 'POST',
            headers: {},
            body: {}
        });
        prepared.should.be.an.Object();
        prepared.options.should.be.an.Object();
        prepared.options.headers.should.have.property('Authorization').eql('Bearer token');
        done();
    });
});