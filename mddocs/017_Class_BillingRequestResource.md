<a name="BillingRequestResource"></a>

## BillingRequestResource ⇐ <code>GenericResource</code>
The *BillingRequestResource* class provides methods to access the billing
requests endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [BillingRequestResource](#BillingRequestResource) ⇐ <code>GenericResource</code>
    * [new BillingRequestResource(client)](#new_BillingRequestResource_new)
    * [.updateAttributes(id, attributes)](#BillingRequestResource+updateAttributes) ⇒ <code>object</code>

<a name="new_BillingRequestResource_new"></a>

### new BillingRequestResource(client)
Creates a new instance of the *BillingRequestResource* class.

**Returns**: [<code>BillingRequestResource</code>](#BillingRequestResource) - An instance of the *BillingRequestResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="BillingRequestResource+updateAttributes"></a>

### billingRequestResource.updateAttributes(id, attributes) ⇒ <code>object</code>
Update billing request attributs.

**Kind**: instance method of [<code>BillingRequestResource</code>](#BillingRequestResource)  
**Returns**: <code>object</code> - The updated attributes object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identified of the *BillingRequest*. |
| attributes | <code>object</code> | An object containing the attributes to update. |

