const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const DefaultAdapter = require('../lib/connect/http').DefaultAdapter;

describe('Connect Javascript SDK - DefaultAdapter', () => {
    // it('extract the url from the options', (done) => {
    //     const adapter = new DefaultAdapter();
    //     const prepared = adapter.prepareRequest('http://localhost', {
    //         method: 'POST',
    //         body: {}
    //     });
    //     prepared.should.be.an.Object();
    //     prepared.should.have.property('url').eql('http://localhost');
    //     prepared.should.have.property('options');
    //     prepared.options.should.be.an.Object();
    //     prepared.options.should.not.have.property('url');
    //     done();
    // });
    // it('invokes the beforeRequest middleware', (done) => {
    //     const adapter = new DefaultAdapter();
    //     adapter.beforeRequest = [
    //         (url, options) => {
    //             options.headers.Authorization = 'Bearer token'
    //         }
    //     ]
    //     const prepared = adapter.prepareRequest('http://localhost', {
    //         method: 'POST',
    //         body: {}
    //     });
    //     // console.log(prepared);
    //     prepared.should.be.an.Object();
    //     prepared.options.should.be.an.Object();
    //     prepared.options.headers.should.have.property('Authorization').eql('Bearer token');
    //     done();
    // });
});