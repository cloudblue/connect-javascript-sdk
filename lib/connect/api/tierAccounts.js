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
class TierAccountResource extends GenericResource {
  /**
   * Creates a new instance of the ``TierAccountResource`` class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @return  {TierAccountResource}  An instance of the ``TierAccountResource`` class.
   */
  constructor(client) {
    super(client, '/tier/accounts');
  }
}

module.exports = TierAccountResource;
