/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const RequestService = require('./requests');
const AccountService = require('./accounts');
const ProductService = require('./products');
const ConversationService = require('./conversations');
const HubService = require('./hubs');
const TierAccountService = require('./tierAccounts');
const TierConfigRequestService = require('./tierConfigRequests');

module.exports = {
  AccountService,
  ProductService,
  RequestService,
  ConversationService,
  HubService,
  TierAccountService,
  TierConfigRequestService,
};
