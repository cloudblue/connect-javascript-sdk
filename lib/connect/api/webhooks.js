/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The WebhookResource class provides methods to access the webhooks
 * endpoint of the Cloud Blue Connect API.
 */
class WebhookResource extends GenericResource {
  constructor(client) {
    super(client, '/notifications/webhooks');
  }
}

module.exports = WebhookResource;
