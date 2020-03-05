/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The *TierConfigRequestResource* class provides methods to access the *TierConfig*
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class TierConfigResource extends GenericResource {
  /**
   * Creates a new instance of the *TierConfigResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {TierConfigResource}  An instance of the *TierConfigResource* class.
   */
  constructor(client) {
    super(client, '/tier/configs');
  }
}


module.exports = TierConfigResource;
