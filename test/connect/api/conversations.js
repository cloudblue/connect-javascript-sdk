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
        const response = await client.conversations.getConversationsByObjectId('PR-3767-7014-3540-001');
        response.should.be.an.Object();
    });
    it('put a message in a conversation of the request', async () => {
        nock('https://localhost')
            .post('/conversations/CO-000-000-000/messages', { text: 'Un elefante se balanceaba sobre la tela de un araña' })
            .reply(200, responses.conversations.message_response);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.conversations.createMessage('CO-000-000-000', 'Un elefante se balanceaba sobre la tela de un araña');
        response.should.be.an.Object();
    });
    it('get a messages of a conversation', async () => {
        nock('https://localhost')
            .get('/conversations/CO-000-000-000')
            .reply(200, responses.conversations.messages);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.conversations.getConversation('CO-000-000-000');
        response.should.be.an.Object();
    });

});
