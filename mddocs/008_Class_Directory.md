<a name="Directory"></a>

## Directory
The Directory class exposes specialized methods to help
developers to access the directory (assets, tier configs, tier accounts).

**Kind**: global class  
**Category**: Operations  

* [Directory](#Directory)
    * [new Directory(client)](#new_Directory_new)
    * [.searchAssets(query)](#Directory+searchAssets) ⇒ <code>Array</code>
    * [.searchTierConfigurations(query)](#Directory+searchTierConfigurations) ⇒ <code>Array</code>
    * [.searchTierAccounts(query)](#Directory+searchTierAccounts) ⇒ <code>Array</code>
    * [.getTierAccount(id)](#Directory+getTierAccount) ⇒ <code>object</code>
    * [.getAssetsByProductIdExternalId(productId, externalId)](#Directory+getAssetsByProductIdExternalId) ⇒ <code>Array</code>
    * [.createTierAccountRequest(request)](#Directory+createTierAccountRequest) ⇒ <code>object</code>
    * [.searchTierAccountRequests(query)](#Directory+searchTierAccountRequests) ⇒ <code>Array</code>
    * [.getTierAccountRequest(id)](#Directory+getTierAccountRequest) ⇒ <code>object</code>
    * [.acceptTierAccountRequest(id)](#Directory+acceptTierAccountRequest) ⇒ <code>object</code>
    * [.ignoreTierAccountRequest(id, reason)](#Directory+ignoreTierAccountRequest) ⇒ <code>object</code>
    * [.getTierAccountVersion(id, version)](#Directory+getTierAccountVersion) ⇒ <code>object</code>

<a name="new_Directory_new"></a>

### new Directory(client)
Creates an instance of the Directory class.

**Returns**: [<code>Directory</code>](#Directory) - An instance of the Directory class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="Directory+searchAssets"></a>

### directory.searchAssets(query) ⇒ <code>Array</code>
Returns a list of *Asset* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>Array</code> - An array of *Asset* object optionally matching the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Directory+searchTierConfigurations"></a>

### directory.searchTierConfigurations(query) ⇒ <code>Array</code>
Returns a list of *TierConfiguration* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>Array</code> - An array of *TierConfiguration* object optionally
                              matching the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Directory+searchTierAccounts"></a>

### directory.searchTierAccounts(query) ⇒ <code>Array</code>
Returns a list of *TierAccount* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>Array</code> - An array of *TierAccount* object optionally matching the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Directory+getTierAccount"></a>

### directory.getTierAccount(id) ⇒ <code>object</code>
Retrieve a *TierAccount* by its id.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The TierAccount object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierAccount object. |

<a name="Directory+getAssetsByProductIdExternalId"></a>

### directory.getAssetsByProductIdExternalId(productId, externalId) ⇒ <code>Array</code>
Returns a list of *Asset* objects based on the productId and
the *Asset* externalId.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>Array</code> - An array of *Asset* objects.  

| Param | Type | Description |
| --- | --- | --- |
| productId | <code>string</code> | The unique id of the *Product* related to this *Asset*. |
| externalId | <code>string</code> | The external identifier of the *Asset*. |

<a name="Directory+createTierAccountRequest"></a>

### directory.createTierAccountRequest(request) ⇒ <code>object</code>
Creates a new *TierAccountRequest*

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The created TierAccountRequest object.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | The TierAccountRequest object. |

<a name="Directory+searchTierAccountRequests"></a>

### directory.searchTierAccountRequests(query) ⇒ <code>Array</code>
Returns a list of *TierAccountRequest* objects that match the provided
filters.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>Array</code> - An array of *TierAccountRequest* objects
                           that match the provided filters.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | A RQL query. |

<a name="Directory+getTierAccountRequest"></a>

### directory.getTierAccountRequest(id) ⇒ <code>object</code>
Retrieve the *TierAccountRequest* object identified by its id.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The *TierAccountRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *TierAccountRequest* object. |

<a name="Directory+acceptTierAccountRequest"></a>

### directory.acceptTierAccountRequest(id) ⇒ <code>object</code>
Accept the *TierAccountRequest* object identified by its id.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The *TierAccountRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *TierAccountRequest* object. |

<a name="Directory+ignoreTierAccountRequest"></a>

### directory.ignoreTierAccountRequest(id, reason) ⇒ <code>object</code>
Ignore the *TierAccountRequest* object identified by its id.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The *TierAccountRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *TierAccountRequest* object. |
| reason | <code>string</code> | The reason for which this request has been ignored. |

<a name="Directory+getTierAccountVersion"></a>

### directory.getTierAccountVersion(id, version) ⇒ <code>object</code>
Returns the specified version of the *TierAccount* object identified by its id.

**Kind**: instance method of [<code>Directory</code>](#Directory)  
**Returns**: <code>object</code> - The *TierAccount* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *TierAccount* object. |
| version | <code>string</code> | The version to be retrieved. |

