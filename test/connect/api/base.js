/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const BaseService = require('../../../lib/connect/api/base');
const { HttpError, APIError } = require('../../../lib/connect/api/errors');

describe('Connect Javascript SDK - BaseService', () => {
    it('addParams returns url unmodified if no params object is provided', () => {
        const base = new BaseService();
        const url = base.addParams('/app');
        url.should.be.eql('/app');
    });
    it('addParams returns url unmodified if no params', () => {
        const base = new BaseService();
        const url = base.addParams('/app', {});
        url.should.be.eql('/app');
    });
    it('checkResponse should throw a HttpError if content type is not JSON', async () => {
        const base = new BaseService();
        const response = {
            ok: false,
            status: 400,
            headers: {'content-type': 'text/plain'},
            text: () => Promise.resolve('text')
        };
        await base.checkResponse(response).should.be.rejectedWith(HttpError, {status: 400, message: 'text'});
    });
    it('checkResponse should throw a APIError if content type is JSON', async () => {
        const base = new BaseService();
        const error = {
            error_code: 'SYS_001',
            errors: [
                'test error message'
            ]
        };
        const response = {
            ok: false,
            status: 400,
            headers: {'content-type': 'application/json'},
            text: () => Promise.resolve(JSON.stringify(error))
        };
        await base.checkResponse(response).should.be.rejectedWith(APIError, {
            status: 400, 
            json: error,
            errorCode: error.error_code,
            errors: error.errors
        });
    });
});
