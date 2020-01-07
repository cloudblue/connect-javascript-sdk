/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The AccountResource class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class HubResource extends GenericResource {
  constructor(client) {
    super(client, '/hubs');
  }
}

module.exports = HubResource;
