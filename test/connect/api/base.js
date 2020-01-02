/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const nock = require('nock');
const BaseService = require('../../../lib/connect/api/base');
const { HttpError, APIError } = require('../../../lib/connect/api/errors');
const connect = require('../../../index');
const ConnectClient = connect.ConnectClient;

describe('Connect Javascript SDK - BaseService', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('addParams returns url unmodified if no params object is provided', () => {
        const base = new BaseService();
        const url = base.appendToQuerystring('/app');
        url.should.be.eql('/app');
    });
    it('addParams append params to querystring if url already has qs params', () => {
        const base = new BaseService();
        const url = base.appendToQuerystring('/app?myparam=myvalue', {mysecondparam: 'mysecondvalue'});
        url.should.be.eql('/app?myparam=myvalue&mysecondparam=mysecondvalue');
    });
    it('addParams returns url unmodified if no params', () => {
        const base = new BaseService();
        const url = base.appendToQuerystring('/app', {});
        url.should.be.eql('/app');
    });
    it('checkResponse should throw a HttpError if content type is not JSON', async () => {
        const base = new BaseService(new ConnectClient('https://localhost', '1234567890'));
        nock('https://localhost')
            .get('/')
            .reply(400, 'text', {'content-type': 'text/plain'});
        await base.fetch('/').should.be.rejectedWith(HttpError, {status: 400, message: 'text'});        
    });
    it('checkResponse should throw a APIError if content type is JSON', async () => {
        const base = new BaseService(new ConnectClient('https://localhost', '1234567890'));
        const error = {
            error_code: 'SYS_001',
            errors: [
                'test error message'
            ]
        };
        // const response = {
        //     ok: false,
        //     status: 400,
        //     headers: {'content-type': 'application/json'},
        //     text: () => Promise.resolve(JSON.stringify(error))
        // };
        nock('https://localhost')
            .get('/')
            .reply(400, JSON.stringify(error), {'content-type': 'application/json'});

        await base.fetch('/').should.be.rejectedWith(APIError, {
            status: 400, 
            json: error,
            errorCode: error.error_code,
            errors: error.errors
        });
    });
});
