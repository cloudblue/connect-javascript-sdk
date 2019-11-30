/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */


const should = require('should');
const BaseService = require('../../../lib/connect/api/base');

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
});
