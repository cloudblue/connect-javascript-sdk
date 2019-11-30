/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const connect = require('../index');
const ConnectClient = connect.ConnectClient;
const HttpError = connect.HttpError;


describe('Connect Javascript SDK - Accounts', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of 1 element with the account info', async () => {
        nock('https://localhost')
            .get('/accounts')
                .reply(200, [
                    {
                        id: 'VA-000-000',
                        name: 'Vendor',
                        type: 'vendor',
                        brand: 'BR-704',
                        external_id: '5b3e4e1d-f9f6-e811-a95a-000d3a1f74d1',
                        events : {
                            created: {
                                at: '2018-06-04T13:19:10+00:00'
                            }
                        },
                        sourcing: false
                    }
                ]);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.accounts.list();        
        response.should.be.an.Array();
        response.should.have.size(1);
        response[0].should.have.property('id').eql('VA-000-000');
        response[0].should.have.property('name').eql('Vendor');
    });
    it('should be rejected if internal server error', async () => {
        nock('https://localhost')
            .get('/accounts')
            .reply(500, 'Internal server error');
        const client = new ConnectClient('https://localhost', '1234567890');
        await client.accounts.list().should.be.rejectedWith(HttpError, {status: 500, message: 'Internal server error'});

    });
});
