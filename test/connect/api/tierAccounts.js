/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const responses = require('./responses');
const connect = require('../../../index');
const ConnectClient = connect.ConnectClient;
const { parseQuery } = require('rql/parser');
const { Query } = require('rql/query');


describe('Connect Javascript SDK - Tier Accounts', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of tier accounts', async () => {
        nock('https://localhost')
            .get('/tier/accounts')
            .query({ limit: 100, offset: 0 })
            .reply(200, responses.tierAccounts.tier_accounts_list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierAccounts.search();        
        response.should.be.an.Array();
    });
    it('returns a list of tier accounts filtered by scopes and external_uid', async () => {
        const q = new Query();
        const parsed = parseQuery('and(eq(external_uid,c35f60c5-0e2f-4ffd-9d09-8eab7b49758e),in(scopes,tier1,customer))');
        Object.assign(q, parsed);
        nock('https://localhost')
            .get('/tier/accounts')
            .query({
                'and(eq(external_uid,c35f60c5-0e2f-4ffd-9d09-8eab7b49758e),in(scopes,tier1,customer))': '',
                limit: '100',
                offset: '0' })
            .reply(200, responses.tierAccounts.tier_accounts_list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierAccounts.search({ query: q, limit: 100, offset: 0 });        
        response.should.be.an.Array();
    });
    it('returns a TierAccount object by its id', async () => {
        nock('https://localhost')
            .get('/tier/accounts/TA-0000-0000-0000')
            .reply(200, responses.tierAccounts.tier_account);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierAccounts.get('TA-0000-0000-0000');   
        response.should.be.an.Object();
        response.should.have.property('id').eql('TA-0000-0000-0000');
    });
});
