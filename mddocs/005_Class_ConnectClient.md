<a name="ConnectClient"></a>

## ConnectClient
*ConnectClient* provides access to resouce endpoints of the Cloud Blue Connect Platform.

**Kind**: global class  
**Category**: Base  

* [ConnectClient](#ConnectClient)
    * [new ConnectClient(endpoint, apiKey, adapter)](#new_ConnectClient_new)
    * [.accounts](#ConnectClient+accounts) : <code>AccountResource</code>
    * [.assets](#ConnectClient+assets) : <code>AssetResource</code>
    * [.billingRequests](#ConnectClient+billingRequests) : <code>BillingRequestResource</code>
    * [.conversations](#ConnectClient+conversations) : <code>ConversationResource</code>
    * [.products](#ConnectClient+products) : <code>ProductResource</code>
    * [.requests](#ConnectClient+requests) : <code>RequestResource</code>
    * [.hubs](#ConnectClient+hubs) : <code>HubResource</code>
    * [.recurringAssets](#ConnectClient+recurringAssets) : <code>RecurringAssetResource</code>
    * [.tierAccounts](#ConnectClient+tierAccounts) : <code>TierAccountResource</code>
    * [.tierAccountRequests](#ConnectClient+tierAccountRequests) : <code>TierAccountRequestResource</code>
    * [.tierConfigs](#ConnectClient+tierConfigs) : <code>TierConfigResource</code>
    * [.tierConfigRequests](#ConnectClient+tierConfigRequests) : <code>TierConfigRequestResource</code>
    * [.webhooks](#ConnectClient+webhooks) : <code>WebhookResource</code>
    * [.listingRequests](#ConnectClient+listingRequests) : <code>ListingRequestResource</code>
    * [.cases](#ConnectClient+cases) : <code>CaseResource</code>
    * [.usageFiles](#ConnectClient+usageFiles) : <code>UsageFileResource</code>
    * [.usageAggregates](#ConnectClient+usageAggregates) : <code>UsageAggregateResource</code>
    * [.usageChunks](#ConnectClient+usageChunks) : <code>UsageChunkResource</code>
    * [.usageReconciliations](#ConnectClient+usageReconciliations) : <code>UsageReconciliationResource</code>
    * [.usageRecords](#ConnectClient+usageRecords) : <code>UsageRecordResource</code>

<a name="new_ConnectClient_new"></a>

### new ConnectClient(endpoint, apiKey, adapter)
Creates a new instance of the Cloud Blue *ConnectClient* class.
Configures the *beforeRequest* hooks to inject the API key in the Authorizaton header
and prefixes the url with the API's base url.

**Returns**: [<code>ConnectClient</code>](#ConnectClient) - An instance of the ConnectClient class.  

| Param | Type | Description |
| --- | --- | --- |
| endpoint | <code>string</code> | The base URL for API access. |
| apiKey | <code>string</code> | The API key to authenticate with Connect. |
| adapter | <code>AbstractHttpAdapter</code> | An optional adapter. |

<a name="ConnectClient+accounts"></a>

### connectClient.accounts : <code>AccountResource</code>
Returns an instance of the *AccountResource* class to access
the *Account* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+assets"></a>

### connectClient.assets : <code>AssetResource</code>
Returns an instance of the *AssetResource* class to access
the *Asset* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+billingRequests"></a>

### connectClient.billingRequests : <code>BillingRequestResource</code>
Returns an instance of the *BillingRequestResource* class to access
the *BillingRequest* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+conversations"></a>

### connectClient.conversations : <code>ConversationResource</code>
Returns an instance of the *ConversationResource* class to access
the *Conversation* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+products"></a>

### connectClient.products : <code>ProductResource</code>
Returns an instance of the *ProductResource* class to access
the *Product* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+requests"></a>

### connectClient.requests : <code>RequestResource</code>
Returns an instance of the *RequestResource* class to access
the *Request* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+hubs"></a>

### connectClient.hubs : <code>HubResource</code>
Returns an instance of the *HubResource* class to access
the *Hub* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+recurringAssets"></a>

### connectClient.recurringAssets : <code>RecurringAssetResource</code>
Returns an instance of the *RecurringAssetResource* class to access
the *RecurringAsset* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+tierAccounts"></a>

### connectClient.tierAccounts : <code>TierAccountResource</code>
Returns an instance of the *TierAccountResource* class to access
the *TierAccount* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+tierAccountRequests"></a>

### connectClient.tierAccountRequests : <code>TierAccountRequestResource</code>
Returns an instance of the *TierAccountRequestResource* class to access
the *TierAccountRequest* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+tierConfigs"></a>

### connectClient.tierConfigs : <code>TierConfigResource</code>
Returns an instance of the *TierConfigResource* class to access
the *TierConfiguration* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+tierConfigRequests"></a>

### connectClient.tierConfigRequests : <code>TierConfigRequestResource</code>
Returns an instance of the *TierConfigRequestResource* class to access
the *TierConfigurationRequest* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+webhooks"></a>

### connectClient.webhooks : <code>WebhookResource</code>
Returns an instance of the *WebhookResource* class to access
the *Webhook* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+listingRequests"></a>

### connectClient.listingRequests : <code>ListingRequestResource</code>
Returns an instance of the *ListingRequestResource* class to access
the *ListingRequest* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+cases"></a>

### connectClient.cases : <code>CaseResource</code>
Returns an instance of the *CaseResource* class to access
the *HelpdesCase* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+usageFiles"></a>

### connectClient.usageFiles : <code>UsageFileResource</code>
Returns an instance of the *UsageFileResource* class to access
the *UsageFile* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+usageAggregates"></a>

### connectClient.usageAggregates : <code>UsageAggregateResource</code>
Returns an instance of the *UsageAggregateResource* class to access
the *UsageFile* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+usageChunks"></a>

### connectClient.usageChunks : <code>UsageChunkResource</code>
Returns an instance of the *UsageChunkResource* class to access
the *UsageChunk* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+usageReconciliations"></a>

### connectClient.usageReconciliations : <code>UsageReconciliationResource</code>
Returns an instance of the *UsageReconciliationResource* class to access
the *UsageReconciliation* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
<a name="ConnectClient+usageRecords"></a>

### connectClient.usageRecords : <code>UsageRecordResource</code>
Returns an instance of the *UsagerecordResource* class to access
the *UsageRecord* resource endpoint.

**Kind**: instance property of [<code>ConnectClient</code>](#ConnectClient)  
