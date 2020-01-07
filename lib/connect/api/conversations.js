/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const BaseService = require('./base');

/**
* The ConversationService class provides methods to access the conversations
* endpoint of the Cloud Blue Connect API.
*/
class ConversationService extends BaseService {
  /**
   * Creates a new instance of the ``ConversationService`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {ConversationService}  An instance of the ``ConversationService`` class.
   */
  constructor(client) {
    super(client, '/conversations');
  }

  /**
   * Returns a list of conversations attached to the business object specified by its id.
   *
   * @param {string}   id   The unique id of the business object attached to a conversation.
   *
   * @returns {Array} A list of conversations attached to a business object.
   */

  async getConversationsByObjectId(id) {
    const url = this.appendToQuerystring(this.baseUri, { instance_id: id });
    const response = await this.fetch(url);
    return response.json();
  }

  /**
   * Post a message to a ``Conversation`` object.
   *
   * @param {string} id   The unique identifier of the Conversation object.
   * @param {string} msg  The text of the message to post.
   *
   * @returns {Object} The newly created ``Message`` object.
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

module.exports = ConversationService;
