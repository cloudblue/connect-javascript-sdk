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
            .query({ status: 'approved' })
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
            .query({ status__in: 'approved,pending' })
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
            .query({ status__in: 'approved,pending', 'asset.product.id__in': 'PRD-000-000-000,PRD-000-000-001' })
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
        const response = await client.requests.rejectRequest('PR-5426-9883-2189-001', 'Reason to reject');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-5426-9883-2189-001');
        response.should.have.property('status').eql('failed');

    });
    it('Set error in parameters and put a request in Inquire, returns the object request ', async () => {
        nock('https://localhost')
            .post(`/requests/PR-5426-9883-2189-001/inquire`)
            .reply(200, responses.requests.result_inquire_request);
        nock('https://localhost')
            .put('/requests/PR-5426-9883-2189-001')
            .reply(200, responses.requests.update_parameters);
        const client = new ConnectClient('https://localhost', '1234567890');
        const parameters = { 'param_a': 'Not valid' };
        const response = await client.requests.inquireRequest('PR-5426-9883-2189-001', 'Reason to reject', 'TL-827-840-476', parameters);
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-5426-9883-2189-001');
        response.should.have.property('status').eql('inquiring');

    });
    it('updates request root parameters', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(200, responses.requests.update_parameters_root);
        const client = new ConnectClient('https://localhost', '1234567890');
        const request = {
            note: 'this note'
        };
        const response = await client.requests.updateRequest('PR-0000-0000-0000-000', request);
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
        response.should.have.property('note').eql('this note');
    });
    it('updates request parameters', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(200, responses.requests.update_parameters);
        const client = new ConnectClient('https://localhost', '1234567890');
        const params = [
            {
                id: 'activation_link',
                value: 'https://1pwd.com/activate'
            }
        ]
        const response = await client.requests.updateRequestParameters('PR-0000-0000-0000-000', params, 'Test note');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
        response.should.have.property('note').eql('Test note');
        response.should.have.property('asset');
        response.asset.should.have.property('params');
        const obj = {
            name: 'activation_link',
            value_choices: [],
            title: 'Activation link',
            value_error: '',
            type: 'text',
            id: 'activation_link',
            value: 'https://1pwd.com/activate',
            description: 'The link to activate the account'
        };
        response.asset.params.should.containEql(obj);
    });
    it('updates request parameters without note', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(200, responses.requests.update_parameters_without_note);
        const client = new ConnectClient('https://localhost', '1234567890');
        const params = [
            {
                id: 'activation_link',
                value: 'https://1pwd.com/activate'
            }
        ]
        const response = await client.requests.updateRequestParameters('PR-0000-0000-0000-000', params);
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
        response.should.have.property('note').empty();
        response.should.have.property('asset');
        response.asset.should.have.property('params');
        const obj = {
            name: 'activation_link',
            value_choices: [],
            title: 'Activation link',
            value_error: '',
            type: 'text',
            id: 'activation_link',
            value: 'https://1pwd.com/activate',
            description: 'The link to activate the account'
        };
        response.asset.params.should.containEql(obj);
    });
    it('update request parameters fails', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(400, responses.requests.update_parameters_error);
        const client = new ConnectClient('https://localhost', '1234567890');

        await client.requests.updateRequestParameters('PR-0000-0000-0000-000', [], 'Test note')
            .should.be.rejectedWith(HttpError, { status: 400, message: JSON.stringify(responses.requests.update_parameters_error) });
    });
    it('approve request', async () => {
        nock('https://localhost')
            .post('/requests/PR-0000-0000-0000-000/approve', {template_id: 'TL-000-000-000'})
            .reply(200, responses.requests.approve_request);
        const client = new ConnectClient('https://localhost', '1234567890');

        const response = await client.requests.approveWithTemplate('PR-0000-0000-0000-000', 'TL-000-000-000');
        response.should.be.an.Object();
        response.should.have.property('status').eql('approved');
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
});
