<a name="Fulfillment"></a>

## Fulfillment
The Fullfilment class exposes specialized methods to help
developers to achive common use cases for the fulfillment
workflow.

**Kind**: global class  
**Category**: Operations  

* [Fulfillment](#Fulfillment)
    * [new Fulfillment(client)](#new_Fulfillment_new)
    * [.searchRequests(query)](#Fulfillment+searchRequests) ⇒ <code>Array</code>
    * [.failRequest(id, reason)](#Fulfillment+failRequest) ⇒ <code>object</code>
    * [.updateRequest(id, request)](#Fulfillment+updateRequest) ⇒ <code>object</code>
    * [.createRequest(request)](#Fulfillment+createRequest)
    * [.updateRequestParameters(id, params, note)](#Fulfillment+updateRequestParameters) ⇒ <code>object</code>
    * [.inquireRequest(id, request, params, note)](#Fulfillment+inquireRequest) ⇒ <code>object</code>
    * [.inquireRequestWithTemplate(id, templateId, params, note)](#Fulfillment+inquireRequestWithTemplate) ⇒ <code>object</code>
    * [.approveRequest(id, request)](#Fulfillment+approveRequest) ⇒ <code>object</code>
    * [.approveRequestWithTemplate(id, templateId)](#Fulfillment+approveRequestWithTemplate) ⇒ <code>object</code>
    * [.pendingRequest(id)](#Fulfillment+pendingRequest) ⇒ <code>object</code>
    * [.getRequest(id)](#Fulfillment+getRequest) ⇒ <code>object</code>
    * [.searchTierConfigRequests(query)](#Fulfillment+searchTierConfigRequests) ⇒ <code>Array</code>
    * [.failTierConfigRequest(id, reason)](#Fulfillment+failTierConfigRequest)
    * [.approveTierConfigRequest(id, request)](#Fulfillment+approveTierConfigRequest) ⇒ <code>object</code>
    * [.approveTierConfigRequestWithTemplate(id, templateId)](#Fulfillment+approveTierConfigRequestWithTemplate) ⇒ <code>object</code>
    * [.updateTierConfigRequest(id, request)](#Fulfillment+updateTierConfigRequest) ⇒ <code>object</code>
    * [.updateTierConfigRequestParameters(id, params, notes)](#Fulfillment+updateTierConfigRequestParameters) ⇒ <code>object</code>
    * [.createTierConfigRequest(request)](#Fulfillment+createTierConfigRequest)
    * [.createUpdateTierConfigRequest(configId, params)](#Fulfillment+createUpdateTierConfigRequest)
    * [.inquireTierConfigRequest(id, params, notes)](#Fulfillment+inquireTierConfigRequest)
    * [.pendingTierConfigRequest(id)](#Fulfillment+pendingTierConfigRequest) ⇒ <code>object</code>
    * [.getTierConfigRequest(id)](#Fulfillment+getTierConfigRequest) ⇒ <code>object</code>
    * [.getConnectionIdByProductAndHub(productId, hubId)](#Fulfillment+getConnectionIdByProductAndHub) ⇒ <code>string</code> \| <code>null</code>

<a name="new_Fulfillment_new"></a>

### new Fulfillment(client)
Creates an instance of the Fulfillment class.

**Returns**: [<code>Fulfillment</code>](#Fulfillment) - An instance of the Fulfillment class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="Fulfillment+searchRequests"></a>

### fulfillment.searchRequests(query) ⇒ <code>Array</code>
Returns a list of *Request* objects that match the provided
filters.
If no filter is passed, a page of Request in 'pending' status is returned.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>Array</code> - An array of Request objects that match the provided filters.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | A RQL query. |

<a name="Fulfillment+failRequest"></a>

### fulfillment.failRequest(id, reason) ⇒ <code>object</code>
Changes the status of the *Request* object to 'fail'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated Request object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| reason | <code>string</code> | The reason for which the Request has been failed. |

<a name="Fulfillment+updateRequest"></a>

### fulfillment.updateRequest(id, request) ⇒ <code>object</code>
Updates a *Request* object.
Only a partial update can be performed on a *Request* object:
developers can update only the **note** attribute of the Request and/or
the asset parameters **value** or **value_error** attributes.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| request | <code>object</code> | The body of the request. |

**Example**  
```js
{
   note: 'Test Note',
   asset: {
     params: [
       {
         id: 'param_a', // id is required
         value: 'value_of_param_a',
         value_error: 'This address is already used. Try another.'
       }
     ]
   }
}
```
<a name="Fulfillment+createRequest"></a>

### fulfillment.createRequest(request)
Creates a new *Request* object.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | The Request object to create. |

<a name="Fulfillment+updateRequestParameters"></a>

### fulfillment.updateRequestParameters(id, params, note) ⇒ <code>object</code>
Updates the asset parameters of a Request object.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated Request object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| params | <code>Array</code> | Array of *Parameter* objects to update. |
| note | <code>string</code> | An optional **note** for the Request. |

<a name="Fulfillment+inquireRequest"></a>

### fulfillment.inquireRequest(id, request, params, note) ⇒ <code>object</code>
Updates the *Request* object to inquire the provider
for ordering parameter.
It updates the *Parameter* object **value_error** attribute
and set the status of the *Request* to 'inquire'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| request | <code>object</code> | The request body. |
| params | <code>Array</code> | An array of *Parameter* objects to update. |
| note | <code>string</code> | An optional 'note' attribute for the Request. |

**Example**  
```js
// example of the params argument.
[
  {
     id: 'param_a', // id is required
     value_error: 'This address is already used. Try another.'
  }
]
```
**Example**  
```js
// request body using a template id
{
  template_id: 'TL-827-840-476'
}
```
**Example**  
```js
// request body using an activation tile
{
  activation_tile: '<rendered text>'
}
```
<a name="Fulfillment+inquireRequestWithTemplate"></a>

### fulfillment.inquireRequestWithTemplate(id, templateId, params, note) ⇒ <code>object</code>
Updates the *Request* object to inquire the provider
for ordering parameter using an activation template.
It updates the *Parameter* object **value_error** attribute
and set the status of the *Request* to 'inquire'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| templateId | <code>string</code> | The unique identifier of the *Template* object. |
| params | <code>Array</code> | An array of *Parameter* objects to update. |
| note | <code>string</code> | An optional 'note' attribute for the Request. |

<a name="Fulfillment+approveRequest"></a>

### fulfillment.approveRequest(id, request) ⇒ <code>object</code>
Updates the *Request* and set its status to 'approved'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| request | <code>object</code> | The request body. |

**Example**  
```js
// request body using a template id
{
  template_id: 'TL-827-840-476'
}
```
**Example**  
```js
// request body using an activation tile
{
  activation_tile: '<rendered text>'
}
```
<a name="Fulfillment+approveRequestWithTemplate"></a>

### fulfillment.approveRequestWithTemplate(id, templateId) ⇒ <code>object</code>
Updates the *Request* and set its status to 'approved'
using an activation template.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| templateId | <code>string</code> | The template id to use for *Request* approval. |

<a name="Fulfillment+pendingRequest"></a>

### fulfillment.pendingRequest(id) ⇒ <code>object</code>
Updates the *Request* and set its status to 'pending'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |

<a name="Fulfillment+getRequest"></a>

### fulfillment.getRequest(id) ⇒ <code>object</code>
Retrieve the *Request* object identified by its id.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The *Request* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |

<a name="Fulfillment+searchTierConfigRequests"></a>

### fulfillment.searchTierConfigRequests(query) ⇒ <code>Array</code>
Returns a list of at most **limit** *TierConfigurationRequest* objects
that match the provided filters.
If no filter is passed, a page of Request in 'pending' status is returned.

for further information about the filters object.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>Array</code> - An array of TierConfigurationRequest objects that match the provided filters.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | A RQL query. |

<a name="Fulfillment+failTierConfigRequest"></a>

### fulfillment.failTierConfigRequest(id, reason)
Changes the status of the *TierConfigurationRequest* object to 'fail'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| reason | <code>string</code> | The reason for which the TierConfigurationRequest has been failed. |

<a name="Fulfillment+approveTierConfigRequest"></a>

### fulfillment.approveTierConfigRequest(id, request) ⇒ <code>object</code>
Updates the *TierConfigurationRequest* and set its status to 'approved'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The rendered template.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| request | <code>object</code> | The request body. |

**Example**  
```js
// request body using a template id
{
  template: {
    id: 'TL-827-840-476'
  }
}
```
<a name="Fulfillment+approveTierConfigRequestWithTemplate"></a>

### fulfillment.approveTierConfigRequestWithTemplate(id, templateId) ⇒ <code>object</code>
Updates the *TierConfigurationRequest* and set its status to 'approved'
using an template.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The rendered template.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| templateId | <code>string</code> | The template id to use for TierConfigurationRequest approval. |

<a name="Fulfillment+updateTierConfigRequest"></a>

### fulfillment.updateTierConfigRequest(id, request) ⇒ <code>object</code>
Updates a *TierConfigurationRequest* object.
Only a partial update can be performed on a *TierConfigurationRequest* object:
developers can update only the **notew** attribute of the TierConfigurationRequest and/or
the config parameters **value** or **value_error** attributes.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *TierConfigurationRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| request | <code>object</code> | The body of the request. |

**Example**  
```js
{
   notes: 'Test Note',
   params: [
     {
       id: 'param_a', // id is required
       value: 'value_of_param_a',
       value_error: 'This address is already used. Try another.'
     }
   ]
}
```
<a name="Fulfillment+updateTierConfigRequestParameters"></a>

### fulfillment.updateTierConfigRequestParameters(id, params, notes) ⇒ <code>object</code>
Updates the parameters of a *TierConfigurationRequest* object.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated Request object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigurationRequest object. |
| params | <code>Array</code> | Array of *Parameter* objects to update. |
| notes | <code>string</code> | An optional **notes** for the TierConfigurationRequest. |

<a name="Fulfillment+createTierConfigRequest"></a>

### fulfillment.createTierConfigRequest(request)
Creates a new *TierConfigurationRequest* object.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | The TierConfigurationRequest object to create. |

<a name="Fulfillment+createUpdateTierConfigRequest"></a>

### fulfillment.createUpdateTierConfigRequest(configId, params)
Creates a new *TierConfigurationRequest* object of type="update".

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  

| Param | Type | Description |
| --- | --- | --- |
| configId | <code>string</code> | The TierConfigurationRequest unique identifier. |
| params | <code>Array</code> | An array of parameters. |

<a name="Fulfillment+inquireTierConfigRequest"></a>

### fulfillment.inquireTierConfigRequest(id, params, notes)
Updates the *TierConfigRequest* object to inquire the tier
for ordering parameter.
It updates the *Parameter* object **value_error** attribute
and set the status of the *TierConfigRequest* to 'inquire'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| params | <code>Array</code> | An array of *Parameter* objects to update. |
| notes | <code>string</code> | An optional 'notes' attribute for the Request. |

**Example**  
```js
// example of the params argument.
[
  {
     id: 'param_a', // id is required
     value_error: 'This address is already used. Try another.'
  }
]
```
<a name="Fulfillment+pendingTierConfigRequest"></a>

### fulfillment.pendingTierConfigRequest(id) ⇒ <code>object</code>
Updates the *TierConfigRequest* and set its status to 'pending'.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The updated *TierConfigRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigRequest object. |

<a name="Fulfillment+getTierConfigRequest"></a>

### fulfillment.getTierConfigRequest(id) ⇒ <code>object</code>
Retrieve the *TierConfigRequest* object identified by its id.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>object</code> - The *TierConfigRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the TierConfigRequest object. |

<a name="Fulfillment+getConnectionIdByProductAndHub"></a>

### fulfillment.getConnectionIdByProductAndHub(productId, hubId) ⇒ <code>string</code> \| <code>null</code>
Search a connection by a product and a hub and if found returns
the connection identifier otherwise returns null.

**Kind**: instance method of [<code>Fulfillment</code>](#Fulfillment)  
**Returns**: <code>string</code> \| <code>null</code> - The Connection identifier or null.  

| Param | Type | Description |
| --- | --- | --- |
| productId | <code>string</code> | The unique identifier of the Product. |
| hubId | <code>string</code> | The unique identifier of the Hub. |

