/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const shouldsinon = require('should-sinon');
const sinon = require('sinon');
const nock = require('nock');
const responses = require('./responses');

const { ConnectClient } = require('../../../index');
const { ActionResource } = require('../../../lib/connect/api');

describe('Connect Javascript SDK - Product actions', () => {
    let sandbox;
    before(() => { sandbox = sinon.createSandbox(); });
    afterEach(done => { nock.cleanAll(); sandbox.restore(); done(); });
    it('returns a list of product actions', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/actions')
            .reply(200, responses.productActions.list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.actions('PRD-150-215-020').search();
        response.should.be.an.Array();
    });
    it('returns a list of product actions for product version', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/versions/1/actions')
            .reply(200, responses.productActions.list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.versions('PRD-150-215-020').actions('1').search();
        response.should.be.an.Array();
    });
    it('get a product action by its id', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/actions/sso_action')
            .reply(200, responses.productActions.get);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.actions('PRD-150-215-020').get('sso_action');
        response.should.be.an.Object();
    });
    it('get a product action by its id for product version', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/versions/1/actions/sso_action')
            .reply(200, responses.productActions.get);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.versions('PRD-150-215-020').actions('1').get('sso_action');
        response.should.be.an.Object();
    });
    it('get a product action link by its id', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/actions/sso_action/actionLink')
            .query({asset_id: 'AS-0126-3396-8831'})
            .reply(200, responses.productActions.link);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.actions('PRD-150-215-020').link('sso_action', 'AS-0126-3396-8831');
        response.should.be.an.Object();
        response.should.have.property('link');
    });
    it('get a product action link by its id for product version', async () => {
        nock('https://localhost')
            .get('/products/PRD-150-215-020/versions/1/actions/sso_action/actionLink')
            .query({asset_id: 'AS-0126-3396-8831'})
            .reply(200, responses.productActions.link);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.versions('PRD-150-215-020').actions('1').link('sso_action', 'AS-0126-3396-8831');
        response.should.be.an.Object();
        response.should.have.property('link');
    });
});
