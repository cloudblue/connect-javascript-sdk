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
   * Returns a list of conversations attached to the business object specified by its id.
   *
   * @param {string}   id   The unique id of the business object attached to a conversation.
   *
   * @returns {Array} A list of conversations attached to a business object.
   */

  async getConversationsByObjectId(id) {
    const url = this.addParams('/conversations', { instance_id: id });
    const response = await this.fetch(url);
    this.checkResponse(response);
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
    await this.checkResponse(response);
    return response.json();
  }

  /**
   * Retrieves a ``Conversation`` object by id.
   *
   * @param {string} id   The unique identifier of the Conversation object.
   *
   * @returns {Object} The Conversation object identified by id.
   */
  async getConversation(id) {
    const url = `/conversations/${id}`;
    const response = await this.fetch(url);
    await this.checkResponse(response);
    return response.json();
  }
}

module.exports = ConversationService;
