/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');

/**
 * The AssetResource class provides methods to access the accounts
 * endpoint of the Cloud Blue Connect API.
 */
class AssetResource extends GenericResource {
  /**
   * Creates a new instance of the ``AssetResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {AssetResource}  An instance of the ``AssetResource`` class.
   */
  constructor(client) {
    super(client, '/assets');
  }
}

module.exports = AssetResource;