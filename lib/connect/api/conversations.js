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
   * Retrieves the id of the conversation of request.
   *
   * @param {string} id   The unique request identifier for which retrieve the conversationId.
   *
   * @returns {string}    Conversation ID.
   */

  async getConversationIdByRequest(id) {
    const url = this.addParams('/conversations', { instance_id: id });
    const response = await this.fetch(url);
    this.checkResponse(response);
    const conv = await response.json();
    if (conv.length === 1) {
      return conv[0].id;
    }
    return null;
  }

  /**
   * Publish a message in a convesation of the id request.
   *
   * @param {string} id   The unique request identifier for which publish.
   * @param {string} msg  The message to publish.
   *
   * @returns {string} An array with the id oof the message.
   */
  async createMessage(id, msg) {
    const messageId = await this.getConversationIdByRequest(id);
    const url = `/conversations/${messageId}/messages`;
    const options = {
      method: 'POST',
      body: {
        text: msg,
      },
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Get messages of the id request.
   *
   * @param {string} id   The unique request identifier for which publish.
   *
   * @returns {object} An object with the messages.
   */
  async getMessages(id) {
    const conversationId = await this.getConversationIdByRequest(id);
    const url = `/conversations/${conversationId}`;
    const options = {
      method: 'GET',
    };
    const response = await this.fetch(url, options);
    await this.checkResponse(response);
    return response.json();
  }
}

module.exports = ConversationService;
