<a name="TierConfigRequestResource"></a>

## TierConfigRequestResource ⇐ <code>GenericResource</code>
The *TierConfigRequestResource* class provides methods to access the *TierConfigRequest*
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [TierConfigRequestResource](#TierConfigRequestResource) ⇐ <code>GenericResource</code>
    * [new TierConfigRequestResource(client)](#new_TierConfigRequestResource_new)
    * [.fail(id, reason)](#TierConfigRequestResource+fail)
    * [.inquire(id)](#TierConfigRequestResource+inquire)
    * [.pending(id)](#TierConfigRequestResource+pending)
    * [.approve(id, request)](#TierConfigRequestResource+approve) ⇒ <code>object</code>

<a name="new_TierConfigRequestResource_new"></a>

### new TierConfigRequestResource(client)
Creates a new instance of the *TierConfigRequestResource* class.

**Returns**: [<code>TierConfigRequestResource</code>](#TierConfigRequestResource) - An instance of the *TierConfigRequestResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="TierConfigRequestResource+fail"></a>

### tierConfigRequestResource.fail(id, reason)
Changes the status of a *TierConfigurationRequest* to fail.

**Kind**: instance method of [<code>TierConfigRequestResource</code>](#TierConfigRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| reason | <code>string</code> | The reason for which the TierConfigurationRequest has been failed. |

<a name="TierConfigRequestResource+inquire"></a>

### tierConfigRequestResource.inquire(id)
Changes the status of a *TierConfigurationRequest* to inquire.

**Kind**: instance method of [<code>TierConfigRequestResource</code>](#TierConfigRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |

<a name="TierConfigRequestResource+pending"></a>

### tierConfigRequestResource.pending(id)
Changes the status of a *TierConfigurationRequest* to pending.

**Kind**: instance method of [<code>TierConfigRequestResource</code>](#TierConfigRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |

<a name="TierConfigRequestResource+approve"></a>

### tierConfigRequestResource.approve(id, request) ⇒ <code>object</code>
Change the status of a *TierConfigurationRequest* to approved.
To change the status of the TierConfigurationRequest to approved
you must provide a Template id.

**Kind**: instance method of [<code>TierConfigRequestResource</code>](#TierConfigRequestResource)  
**Returns**: <code>object</code> - The rendered Template.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| request | <code>object</code> | The request body. |

**Example**  
```js
// request body using a template id
{
  template: {
    id: 'TL-000-000-000'
  }
}
```
