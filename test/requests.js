/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const ConnectClient = require('../index');

describe('Connect Javascript SDK - Requests', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of purchase requests filtered by status', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({status__in: 'approved'})
            .reply(200, responses.requests.list_approved);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list(['approved']);        
        response.data.should.be.an.Array();
        response.data.forEach(element => {
            element.should.have.property('status').eql('approved');
        });
    });
    it('returns a list of purchase requests filtered by statuses and product', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({status__in: 'approved,pending', product_id__in: 'PRD-000-000-000'})
            .reply(200, responses.requests.list_approved_pending_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.list(['approved', 'pending'], ['PRD-000-000-000']);        
        response.data.should.be.an.Array();
        response.data.forEach(element => {
            element.should.have.property('asset');
            element.asset.should.have.property('product')
            element.asset.product.should.have.property('id').eql('PRD-000-000-000');
        });
    });
    it('reject a request and returns the object request ', async () => {
        nock('https://localhost')
            .post(`/requests/PR-5426-9883-2189-001/fail`)
            .reply(200, responses.requests.result_reject_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.requests.rejectRequest('PR-5426-9883-2189-001', 'Reason to reject');        
        response.data.should.be.an.Object();
        response.data.should.have.property('id').eql('PR-5426-9883-2189-001');
        response.data.should.have.property('status').eql('failed');

    });




});