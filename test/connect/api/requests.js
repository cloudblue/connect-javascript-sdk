/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const { ConnectClient, HttpError } = require('../../../index');

describe('Connect Javascript SDK - Requests', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of purchase requests filtered by single status', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({ status: 'approved', limit: 100, offset: 0 })
            .reply(200, responses.requests.list_approved);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list({status: 'approved'});
        response.should.be.an.Array();
        response.forEach(element => {
            element.should.have.property('status').eql('approved');
        });
    });
    it('returns a list of purchase requests filtered by list of statuses', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({ status__in: 'approved,pending', limit: 100, offset: 0 })
            .reply(200, responses.requests.list_approved);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list({status: ['approved', 'pending']});
        response.should.be.an.Array();
        response.forEach(element => {
            element.should.have.property('status').eql('approved');
        });
    });
    it('returns a list of purchase requests filtered by status and product', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({ status__in: 'approved,pending', 'asset.product.id__in': 'PRD-000-000-000,PRD-000-000-001', limit: 100, offset: 0 })
            .reply(200, responses.requests.list_approved_pending_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list({
            status: ['approved', 'pending'],
            assetProductId: ['PRD-000-000-000', 'PRD-000-000-001']
        });
        response.should.be.an.Array();
        response.forEach(element => {
            element.should.have.property('status');
            ['approved', 'pending'].should.containEql(element.status);
            element.should.have.property('asset');
            element.asset.should.have.property('product');
            element.asset.product.should.have.property('id');
            ['PRD-000-000-000', 'PRD-000-000-001'].should.containEql(element.asset.product.id);
        });
    });
    it('reject a request and returns the object request ', async () => {
        nock('https://localhost')
            .post(`/requests/PR-5426-9883-2189-001/fail`)
            .reply(200, responses.requests.result_reject_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.fail('PR-5426-9883-2189-001', 'Reason to reject');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-5426-9883-2189-001');
        response.should.have.property('status').eql('failed');

    });
    it('create request', async () => {
        nock('https://localhost')
            .post('/requests')
            .reply(200, responses.requests.create_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.create({});
        response.should.be.an.Object();
        response.should.have.property('id');
        response.should.have.property('status').eql('pending');
        response.should.have.property('asset').not.empty();
    });
    it('returns a list of purchase requests paged', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({ limit: 5, offset: 0 })
            .reply(200, responses.requests.requests_page_1);
        nock('https://localhost')
            .get('/requests')
            .query({ limit: 5, offset: 5 })
            .reply(200, responses.requests.requests_page_2);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list({}, 5, 0);
        response.should.be.an.Array();
        response.should.have.size(5);
        const response2 = await client.requests.list({}, 5, 5);
        response2.should.be.an.Array();
        response2.should.not.be.eql(response);
    });
});
