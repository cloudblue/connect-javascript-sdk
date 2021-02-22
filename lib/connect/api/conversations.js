/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const { memoizeWith, identity } = require('ramda');


const { buildUrl } = require('./utils');

const GenericResource = require('./base');

/**
 * The *MessageResources* class provides methods to access the
 * *attachment* objects for a case.
 *
 * @extends GenericResource
 * @category Resources
 */
class MessageResource extends GenericResource {}

/**
 * The *ConversationResource* class provides methods to access the conversations
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class ConversationResource extends GenericResource {
  /**
   * Creates a new instance of the *ConversationResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {ConversationResource}  An instance of the *ConversationResource* class.
   */
  constructor(client) {
    super(client, '/conversations');
    this.messages = memoizeWith(identity, this.messages);
  }

  /**
   * Returns an instance of the *ConversationMessageResource* for a *Conversation*.
   *
   * @param   {string}  id               The unique identifier of the *Conversation*.
   *
   * @returns  {CaseCommentsResource}  An instance of the *ConversationMessageResource*
   *                                     for the case.
   */
  messages(id) {
    return new MessageResource(this._client, `${this.baseUri}/${id}/messages`);
  }

  /**
   * Returns a list of conversations attached to the business object specified by its id.
   *
   * @param {string}   id   The unique id of the business object attached to a conversation.
   *
   * @returns {Array} A list of conversations attached to a business object.
   */
  async getConversationsByObjectId(id) {
    const url = buildUrl(this.baseUri, { instance_id: id });
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Add a message to a *Conversation* object.
   *
   * @param {string} id   The unique identifier of the Conversation object.
   * @param {string} msg  The text of the message to post.
   *
   * @returns {object} The newly created *Message* object.
   */
  async createMessage(id, msg) {
    const url = `/conversations/${id}/messages`;
    const options = {
      method: 'POST',
      body: {
        text: msg,
      },
    };
    const response = await this.fetch(url, options);
    return response.json();
  }
}

module.exports = ConversationResource;
