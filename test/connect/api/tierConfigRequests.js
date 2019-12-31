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

const { ConnectClient, HttpError } = require('../../../index');
const { TierConfigRequestService } = require('../../../lib/connect/api');

describe('Connect Javascript SDK - Tier Configuration Requests', () => {
    let sandbox;
    before(() => { sandbox = sinon.createSandbox(); });
    afterEach(done => { nock.cleanAll(); sandbox.restore(); done(); });
    it('returns a list of tier configuration requests', async () => {
        nock('https://localhost')
            .get('/tier/config-requests')
            .query({ limit: 100, offset: 0 })
            .reply(200, responses.tierConfigRequests.list);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'list');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.list({});
        spy.should.be.calledWith();
        response.should.be.an.Array();
    });
    it('returns a list of unassigned tier configuration requests', async () => {
        nock('https://localhost')
            .get('/tier/config-requests')
            .query({ limit: 100, offset: 0, unassigned: true })
            .reply(200, responses.tierConfigRequests.list);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'list');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.list({ unassigned: true });
        spy.should.be.calledWith();
        response.should.be.an.Array();
    });
    it('returns a list of tier configuration requests ordered by status desc', async () => {
        nock('https://localhost')
            .get('/tier/config-requests')
            .query({ limit: 100, offset: 0, order_by: '-status' })
            .reply(200, responses.tierConfigRequests.list);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'list');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.list({}, '-status');
        spy.should.be.calledWith({}, '-status');
        response.should.be.an.Array();
    });
    it('changes the tier configuration request status to fail', async () => {
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/fail', {reason: 'test'})
            .reply(204);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'fail');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.fail('TCR-000-000-000-000', 'test');
        spy.should.be.calledWith('TCR-000-000-000-000', 'test');
        should(response).not.be.ok();
    });
    it('changes the tier configuration request status to inquire', async () => {
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/inquire')
            .reply(204);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'inquire');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.inquire('TCR-000-000-000-000');
        spy.should.be.calledWith('TCR-000-000-000-000');
        should(response).not.be.ok();
    });
    it('changes the tier configuration request status to pending', async () => {
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/pend')
            .reply(204);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'pending');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.pending('TCR-000-000-000-000');
        spy.should.be.calledWith('TCR-000-000-000-000');
        should(response).not.be.ok();
    });
    it('changes the tier configuration request status to approved', async () => {
        const body = {
            template: {
                id: 'TL-173-949-255'
            }
        };
        nock('https://localhost')
            .post('/tier/config-requests/TCR-000-000-000-000/approve', body)
            .reply(200, responses.tierConfigRequests.approve);
        const spy = sandbox.spy(TierConfigRequestService.prototype, 'approve');
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.approve('TCR-000-000-000-000', body);
        spy.should.be.calledWith('TCR-000-000-000-000', body);
        response.should.be.an.Object();
        response.should.have.property('template');
        response.template.should.have.property('id').eql('TL-173-949-255');
    });
    it('returns a request identified by its id', async () => {
        nock('https://localhost')
            .get('/tier/config-requests/TCR-000-000-000-000')
            .reply(200, responses.tierConfigRequests.get_request);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierConfigRequests.get('TCR-000-000-000-000');
        response.should.be.an.Object();
        response.should.have.property('id').eql('TCR-000-000-000-000');
    });
});
