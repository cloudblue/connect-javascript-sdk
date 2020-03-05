<a name="TierAccountRequestResource"></a>

## TierAccountRequestResource ⇐ <code>GenericResource</code>
The *TierAccountRequestResource* class provides methods to access the tier account
requests endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [TierAccountRequestResource](#TierAccountRequestResource) ⇐ <code>GenericResource</code>
    * [new TierAccountRequestResource(client)](#new_TierAccountRequestResource_new)
    * [.accept(id)](#TierAccountRequestResource+accept) ⇒ <code>object</code>
    * [.ignore(id, reason)](#TierAccountRequestResource+ignore) ⇒ <code>object</code>

<a name="new_TierAccountRequestResource_new"></a>

### new TierAccountRequestResource(client)
Creates a new instance of the *TierAccountRequestResource* class.

**Returns**: [<code>TierAccountRequestResource</code>](#TierAccountRequestResource) - An instance of the *TierAccountRequestResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="TierAccountRequestResource+accept"></a>

### tierAccountRequestResource.accept(id) ⇒ <code>object</code>
Accept the TierAccountRequest.

**Kind**: instance method of [<code>TierAccountRequestResource</code>](#TierAccountRequestResource)  
**Returns**: <code>object</code> - The accepted TierAccountRequest object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierAccountRequest object. |

<a name="TierAccountRequestResource+ignore"></a>

### tierAccountRequestResource.ignore(id, reason) ⇒ <code>object</code>
Ignore the TierAccountRequest.

**Kind**: instance method of [<code>TierAccountRequestResource</code>](#TierAccountRequestResource)  
**Returns**: <code>object</code> - The ignored TierAccountRequest object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierAccountRequest object. |
| reason | <code>string</code> | The reason for which vendor ignore this request. |

