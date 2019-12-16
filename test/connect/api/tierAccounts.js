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


describe('Connect Javascript SDK - Tier Accounts', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of tier accounts', async () => {
        nock('https://localhost')
            .get('/tier/accounts')
            .reply(200, responses.tierAccounts.tier_accounts_list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.tierAccounts.list();        
        response.should.be.an.Array();
    });
});
