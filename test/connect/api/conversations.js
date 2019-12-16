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

describe('Connect Javascript SDK - Conversations', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('get a conversation ID of a request', async () => {
        nock('https://localhost')
            .get('/conversations')
            .query({ instance_id: 'PR-3767-7014-3540-001' })
            .reply(200, responses.conversations.conversation_id);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.conversations.getConversationIdByRequest('PR-3767-7014-3540-001');
        response.should.be.eql('CO-000-000-000');
    });
    it('get a conversation ID of a request', async () => {
        nock('https://localhost')
            .get('/conversations')
            .query({ instance_id: 'PR-3767-7014-3540-001' })
            .reply(200, []);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.conversations.getConversationIdByRequest('PR-3767-7014-3540-001');
        should.equal(response, null);
    });
    it('put a message in a conversation of the request', async () => {
        nock('https://localhost')
            .get('/conversations')
            .query({ instance_id: 'PR-0000-0000-0000-000' })
            .reply(200, responses.conversations.conversation_id);
        nock('https://localhost')
            .post('/conversations/CO-000-000-000/messages', { text: 'Un elefante se balanceaba sobre la tela de un araña' })
            .reply(200, responses.conversations.message_response);
        const client = new ConnectClient('https://localhost', '1234567890');
        //const client = new ConnectClient('https://api.cnct.tech/public/v1', 'ApiKey SU-769-717-535:dbb7843a212f3414f7e0cd34bccbbb757410643f');
        const response = await client.conversations.createMessage('PR-0000-0000-0000-000', 'Un elefante se balanceaba sobre la tela de un araña');
        response.should.be.an.Object();
    });
    it('get a messages of a request', async () => {
        nock('https://localhost')
            .get('/conversations')
            .query({ instance_id: 'PR-3767-7014-3540-001' })
            .reply(200, responses.conversations.conversation_id);        
        nock('https://localhost')
            .get('/conversations/CO-000-000-000')
            .reply(200, responses.conversations.messages);
        const client = new ConnectClient('https://localhost', '1234567890');
        //const client = new ConnectClient('https://api.cnct.tech/public/v1', 'ApiKey SU-769-717-535:dbb7843a212f3414f7e0cd34bccbbb757410643f');
        const response = await client.conversations.getMessages('PR-3767-7014-3540-001');
        response.should.be.an.Object();
    });

});
