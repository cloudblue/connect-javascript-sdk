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
const HttpError = connect.HttpError;


describe('Connect Javascript SDK - Hubs', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of hubs', async () => {
        nock('https://localhost')
            .get('/hubs')
            .reply(200, responses.hubs.hubs_list);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.hubs.search();        
        response.should.be.an.Array();
    });
});
