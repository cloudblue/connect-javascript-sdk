/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The *HubResource* class provides methods to access the hubs
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class HubResource extends GenericResource {
  /**
   * Creates a new instance of the *HubResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the *ConnectClient* class.
   *
   * @returns  {HubResource}  An instance of the *HubResource* class.
   */
  constructor(client) {
    super(client, '/hubs');
  }
}

module.exports = HubResource;
