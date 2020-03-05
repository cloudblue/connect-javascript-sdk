/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
/**
 * The *RecurringAssetResource* class provides methods to access the recurring
 * assets endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class RecurringAssetResource extends GenericResource {
  /**
   * Creates a new instance of the *RecurringAssetResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {RecurringAssetResource}  An instance of the *RecurringAssetResource* class.
   */
  constructor(client) {
    super(client, '/subscriptions/assets');
  }
}

module.exports = RecurringAssetResource;
