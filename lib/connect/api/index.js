/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
const RequestResource = require('./requests');
const AccountResource = require('./accounts');
const AssetResource = require('./assets');
const ProductResource = require('./products');
const ConversationResource = require('./conversations');
const HubResource = require('./hubs');
const TierAccountResource = require('./tierAccounts');
const TierConfigResource = require('./tierConfigs');
const TierConfigRequestResource = require('./tierConfigRequests');
const WebhookResource = require('./webhooks');

module.exports = {
  GenericResource,
  AccountResource,
  AssetResource,
  ProductResource,
  RequestResource,
  ConversationResource,
  HubResource,
  TierAccountResource,
  TierConfigResource,
  TierConfigRequestResource,
  WebhookResource,
};
