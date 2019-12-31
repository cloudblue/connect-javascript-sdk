/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const sinon = require('sinon');
const responses = require('../api/responses');

const { ConnectClient, Fulfillment, HttpError } = require('../../../index');
const { TierConfigRequestService } = require('../../../lib/connect/api');

describe('Connect Javascript SDK - Fulfillment', () => {
    let sandbox;
    before(() => { sandbox = sinon.createSandbox(); });
    afterEach(done => { nock.cleanAll(); sandbox.restore(); done(); });
    it('returns a list of purchase requests filtered by single status', async () => {
        nock('https://localhost')
            .get('/requests')
            .query({ status: 'approved', limit: 100, offset: 0 })
            .reply(200, responses.requests.list_approved);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.listRequests({status: 'approved'});
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
        const ff = new Fulfillment(client);
        const response = await ff.listRequests({status: ['approved', 'pending']});
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
        const ff = new Fulfillment(client);
        const response = await ff.listRequests({
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
        const ff = new Fulfillment(client);
        const response = await ff.failRequest('PR-5426-9883-2189-001', 'Reason to reject');
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
        const ff = new Fulfillment(client);
        const params = { 'param_a': 'Not valid' };
        const response = await ff.inquireRequestWithTemplate(
            'PR-5426-9883-2189-001', 'TL-827-840-476', params, 'Reason to reject');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-5426-9883-2189-001');
        response.should.have.property('status').eql('inquiring');
    });
    it('updates request root parameters', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(200, responses.requests.update_parameters_root);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const request = {
            note: 'this note'
        };
        const response = await ff.updateRequest('PR-0000-0000-0000-000', request);
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
        response.should.have.property('note').eql('this note');
    });
    it('updates request parameters', async () => {
        nock('https://localhost')
            .put('/requests/PR-0000-0000-0000-000')
            .reply(200, responses.requests.update_parameters);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const params = [
            {
                id: 'activation_link',
                value: 'https://1pwd.com/activate'
            }
        ]
        const response = await ff.updateRequestParameters('PR-0000-0000-0000-000', params, 'Test note');
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
        const ff = new Fulfillment(client);
        const params = [
            {
                id: 'activation_link',
                value: 'https://1pwd.com/activate'
            }
        ]
        const response = await ff.updateRequestParameters('PR-0000-0000-0000-000', params);
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
        const ff = new Fulfillment(client);
        await ff.updateRequestParameters('PR-0000-0000-0000-000', [], 'Test note')
            .should.be.rejectedWith(HttpError, { status: 400, message: JSON.stringify(responses.requests.update_parameters_error) });
    });
    it('approve request', async () => {
        nock('https://localhost')
            .post('/requests/PR-0000-0000-0000-000/approve', {template_id: 'TL-000-000-000'})
            .reply(200, responses.requests.approve_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.approveRequestWithTemplate('PR-0000-0000-0000-000', 'TL-000-000-000');
        response.should.be.an.Object();
        response.should.have.property('status').eql('approved');
    });
    it('create request', async () => {
        nock('https://localhost')
            .post('/requests')
            .reply(200, responses.requests.create_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.createRequest({});
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
        const ff = new Fulfillment(client);
        const response = await ff.listRequests({}, null, 5, 0);
        response.should.be.an.Array();
        response.should.have.size(5);
        const response2 = await ff.listRequests({}, null, 5, 5);
        response2.should.be.an.Array();
        response2.should.not.be.eql(response);
    });
    // TCR
    it('updates tier config request parameters', async () => {
        const body = {
            notes: 'Hello notes',
            params: [
                {
                    id: 'gift_code',
                    value: 'abcdef'
                }
            ]
        };
        nock('https://localhost')
            .put('/tier/config-requests/TCR-000-000-000-000', body)
            .reply(200, responses.tierConfigRequests.update);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'update');
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.updateTierConfigRequestParameters('TCR-000-000-000-000', body.params, body.notes);
        spy.should.have.been.calledWith('TCR-000-000-000-000', body);
        response.should.be.an.Object();
        response.should.have.property('id').eql('TCR-000-000-000-000');
        response.should.have.property('notes').eql(body.notes);
    });
    it('updates tier config request parameters without notes', async () => {
        const body = {
            params: [
                {
                    id: 'gift_code',
                    value: 'abcdef'
                }
            ]
        };
        nock('https://localhost')
            .put('/tier/config-requests/TCR-000-000-000-000', body)
            .reply(200, responses.tierConfigRequests.update);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'update');
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.updateTierConfigRequestParameters('TCR-000-000-000-000', body.params);
        spy.should.have.been.calledWith('TCR-000-000-000-000', body);
        response.should.be.an.Object();
        response.should.have.property('id').eql('TCR-000-000-000-000');
    });
    it('updates tier config request set its status to fail', async () => {
        const body = { reason: 'reason' };
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/fail', body)
            .reply(200, responses.tierConfigRequests.update);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'fail');
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.failTierConfigRequest('TCR-000-000-000-000', body.reason);
        spy.should.have.been.calledWith('TCR-000-000-000-000', body.reason);
        should(response).not.be.ok();
    });
    it('approves tier config request', async () => {
        const body = {
            template: {
                id: 'TL-173-949-255'
            }
        };
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/approve', body)
            .reply(200, responses.tierConfigRequests.approve);

        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'approve');
        const response = await ff.approveTierConfigRequestWithTemplate('TCR-000-000-000-000', 'TL-173-949-255');
        spy.should.be.calledWith('TCR-000-000-000-000', body);
        response.should.be.an.Object();
        response.should.have.property('template');
        response.template.should.have.property('id').eql('TL-173-949-255');
    });
    it('returns a list of purchase requests paged', async () => {
        nock('https://localhost')
            .get('/tier/config-requests')
            .query({ limit: 5, offset: 0 })
            .reply(200, responses.tierConfigRequests.list_page1);
        nock('https://localhost')
            .get('/tier/config-requests')
            .query({ limit: 5, offset: 5 })
            .reply(200, responses.tierConfigRequests.list_page2);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.listTierConfigRequests({}, null, 5, 0);
        response.should.be.an.Array();
        response.should.have.size(5);
        const response2 = await ff.listTierConfigRequests({}, null, 5, 5);
        response2.should.be.an.Array();
        response2.should.have.size(1);
        response2.should.not.be.eql(response);
    });
    it('creates tier config request', async () => {
        const body =     {
            configuration: {
              product: {
                "id": "PRD-000-000-000"
              },
              connection: { 
                 id: "CT-0000-0000-0000"
              },
              account: { 
                id: 'TA-1-000-000-000',
                external_uid: 'd121dqe1123'
              },
              parent_account: { 
                id: 'TA-1-000-000-001',
                external_uid: 'd121dqe1124'
              },
              tier_level: 1
            },
            params: [{
              id: 'param_a',
              value: 'param_a_value'
            }]
          };
        nock('https://localhost')
            .post('/tier/config-requests', body)
            .reply(200, responses.tierConfigRequests.approve);

        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'create');
        const response = await ff.createTierConfigRequest(body);
        spy.should.be.calledWith(body);
        response.should.be.an.Object();
    });
    it('changes the status of a request to pending and returns the request', async () => {
        nock('https://localhost')
            .post(`/requests/PR-0000-0000-0000-000/pend`)
            .reply(200, responses.requests.get_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.pendingRequest('PR-0000-0000-0000-000');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
    });
    it('returns a request identified by its id', async () => {
        nock('https://localhost')
            .get(`/requests/PR-0000-0000-0000-000`)
            .reply(200, responses.requests.get_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.getRequest('PR-0000-0000-0000-000');
        response.should.be.an.Object();
        response.should.have.property('id').eql('PR-0000-0000-0000-000');
    });
    it('changes the status of a tier config request to pending and returns the request', async () => {
        nock('https://localhost')
            .post(`/tier/config-requests/TCR-000-000-000-000/pend`)
            .reply(200, responses.tierConfigRequests.get_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.pendingTierConfigRequest('TCR-000-000-000-000');
        should(response).not.be.ok();
    });
    it('returns a request identified by its id', async () => {
        nock('https://localhost')
            .get(`/tier/config-requests/TCR-000-000-000-000`)
            .reply(200, responses.tierConfigRequests.get_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const response = await ff.getTierConfigRequest('TCR-000-000-000-000');
        response.should.be.an.Object();
        response.should.have.property('id').eql('TCR-000-000-000-000');
    });
    it('set error in parameters and put a tier config request in inquire, returns the object request', async () => {
        nock('https://localhost')
            .post(`/tier/config-requests/TCR-000-000-000-000/inquire`)
            .reply(204);
        nock('https://localhost')
            .put('/tier/config-requests/TCR-000-000-000-000')
            .reply(200, responses.tierConfigRequests.update);
        const client = new ConnectClient('https://localhost', '1234567890');
        const ff = new Fulfillment(client);
        const params = [{ id: 'param_a', value_error: 'Not valid' }];
        const response = await ff.inquireTierConfigRequest(
            'TCR-000-000-000-000', params, 'notes');
        should(response).not.be.ok();
    });
});
