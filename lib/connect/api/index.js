/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
const RequestResource = require('./requests');
const AccountResource = require('./accounts');
const AssetResource = require('./assets');
const BillingRequestResource = require('./billingRequests');
const ProductResource = require('./products');
const ConversationResource = require('./conversations');
const HubResource = require('./hubs');
const RecurringAssetResource = require('./recurringAssets');
const TierAccountResource = require('./tierAccounts');
const TierAccountRequestResource = require('./tierAccountRequests');
const TierConfigResource = require('./tierConfigs');
const TierConfigRequestResource = require('./tierConfigRequests');
const WebhookResource = require('./webhooks');
const ListingRequestResource = require('./listingRequests');
const CaseResource = require('./cases');

module.exports = {
  GenericResource,
  AccountResource,
  AssetResource,
  BillingRequestResource,
  ProductResource,
  RequestResource,
  ConversationResource,
  HubResource,
  RecurringAssetResource,
  TierAccountResource,
  TierAccountRequestResource,
  TierConfigResource,
  TierConfigRequestResource,
  WebhookResource,
  ListingRequestResource,
  CaseResource,
};
