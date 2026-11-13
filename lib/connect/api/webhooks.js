/*
 * This file is part of the CloudBlue Connect SDK.
 *
 * @copyright (c) 2025 CloudBlue. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The *WebhookResource* class provides methods to access the webhooks
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class WebhookResource extends GenericResource {
  /**
   * Creates a new instance of the *WebhookResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {WebhookResource}  An instance of the *WebhookResource* class.
   */
  constructor(client) {
    super(client, '/notifications/webhooks');
  }
}

module.exports = WebhookResource;
