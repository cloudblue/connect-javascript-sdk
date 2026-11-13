/*
 * This file is part of the CloudBlue Connect SDK.
 *
 * @copyright (c) 2025 CloudBlue. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

const GenericResource = require('./base');

/**
 * The *UsageFileResource* class provides methods to access the usage file
 * endpoint of the Cloud Blue Connect API.
 *
 * @extends GenericResource
 * @category Resources
 */
class UsageAggregateResource extends GenericResource {
  /**
   * Creates a new instance of the *UsageAggregateResource* class.
   *
   * @param   {ConnectClient}  client  An instance of the ConnectClient class.
   *
   * @returns  {UsageAggregateResource}  An instance of the *UsageAggregateResource* class.
   */
  constructor(client) {
    super(client, '/usage/aggregates');
  }
}
module.exports = UsageAggregateResource;
