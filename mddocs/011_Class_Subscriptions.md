<a name="Subscriptions"></a>

## Subscriptions
The Subscriptions class exposes specialized methods to help
developers to handle subscriptions (recurring assets and billing requests.).

**Kind**: global class  
**Category**: Operations  

* [Subscriptions](#Subscriptions)
    * [new Subscriptions(client)](#new_Subscriptions_new)
    * [.searchBillingRequests(query)](#Subscriptions+searchBillingRequests) ⇒ <code>Array</code>
    * [.createBillingRequest(request)](#Subscriptions+createBillingRequest) ⇒ <code>object</code>
    * [.getBillingRequest(id)](#Subscriptions+getBillingRequest) ⇒ <code>object</code>
    * [.updateBillingRequestAttributes(id, attributes)](#Subscriptions+updateBillingRequestAttributes) ⇒ <code>object</code>
    * [.searchRecurringAssets(query)](#Subscriptions+searchRecurringAssets) ⇒ <code>Array</code>
    * [.getRecurringAsset(id)](#Subscriptions+getRecurringAsset) ⇒ <code>object</code>

<a name="new_Subscriptions_new"></a>

### new Subscriptions(client)
Creates an instance of the Subscriptions class.

**Returns**: [<code>Subscriptions</code>](#Subscriptions) - An instance of the Subscriptions class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="Subscriptions+searchBillingRequests"></a>

### subscriptions.searchBillingRequests(query) ⇒ <code>Array</code>
Returns a list of *BillingRequest* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>Array</code> - An array of *BillingRequest* object optionally matching
                              the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Subscriptions+createBillingRequest"></a>

### subscriptions.createBillingRequest(request) ⇒ <code>object</code>
Creates a new *BillingRequest*

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>object</code> - The created BillingRequest object.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | The BillingRequest object. |

<a name="Subscriptions+getBillingRequest"></a>

### subscriptions.getBillingRequest(id) ⇒ <code>object</code>
Retrieve the *BillingRequest* object identified by its id.

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>object</code> - The *BillingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *BillingRequest* object. |

<a name="Subscriptions+updateBillingRequestAttributes"></a>

### subscriptions.updateBillingRequestAttributes(id, attributes) ⇒ <code>object</code>
Updates the attributes of a *BillingRequest* object.

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>object</code> - The updated BillingRequest attributes object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the BillingRequest object. |
| attributes | <code>object</code> | An attributes object to be updated. |

<a name="Subscriptions+searchRecurringAssets"></a>

### subscriptions.searchRecurringAssets(query) ⇒ <code>Array</code>
Returns a list of *RecurringAsset* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>Array</code> - An array of *RecurringAsset* object optionally matching
                              the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Subscriptions+getRecurringAsset"></a>

### subscriptions.getRecurringAsset(id) ⇒ <code>object</code>
Retrieve the *RecurringAsset* object identified by its id.

**Kind**: instance method of [<code>Subscriptions</code>](#Subscriptions)  
**Returns**: <code>object</code> - The *RecurringAsset* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *RecurringAsset* object. |

