/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const GenericResource = require('./base');
const RequestResource = require('./requests');
const AccountResource = require('./accounts');
const ProductResource = require('./products');
const ConversationResource = require('./conversations');
const HubResource = require('./hubs');
const TierAccountResource = require('./tierAccounts');
const TierConfigRequestResource = require('./tierConfigRequests');

module.exports = {
  GenericResource,
  AccountResource,
  ProductResource,
  RequestResource,
  ConversationResource,
  HubResource,
  TierAccountResource,
  TierConfigRequestResource,
};
