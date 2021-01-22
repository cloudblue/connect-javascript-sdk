<a name="RequestResource"></a>

## RequestResource ⇐ <code>GenericResource</code>
The *RequestResource* class provides methods to access the *Request*
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [RequestResource](#RequestResource) ⇐ <code>GenericResource</code>
    * [new RequestResource(client)](#new_RequestResource_new)
    * [.fail(id, reason)](#RequestResource+fail) ⇒ <code>object</code>
    * [.inquire(id, request)](#RequestResource+inquire) ⇒ <code>object</code>
    * [.approve(id, request)](#RequestResource+approve) ⇒ <code>object</code>
    * [.pending(id)](#RequestResource+pending) ⇒ <code>object</code>

<a name="new_RequestResource_new"></a>

### new RequestResource(client)
Creates a new instance of the *RequestResource* class.

**Returns**: [<code>RequestResource</code>](#RequestResource) - An instance of the *RequestResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="RequestResource+fail"></a>

### requestResource.fail(id, reason) ⇒ <code>object</code>
Change the status of a *Request* to fail.

**Kind**: instance method of [<code>RequestResource</code>](#RequestResource)  
**Returns**: <code>object</code> - The updated Request object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |
| reason | <code>string</code> | The reason for which the Request has been failed. |

<a name="RequestResource+inquire"></a>

### requestResource.inquire(id, request) ⇒ <code>object</code>
Change the status of a *Request* to inquire.
To change the status of the Request to inquire you must provide
either a template id or a template tile.

**Kind**: instance method of [<code>RequestResource</code>](#RequestResource)  
**Returns**: <code>object</code> - The updated Request object.  

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
<a name="RequestResource+approve"></a>

### requestResource.approve(id, request) ⇒ <code>object</code>
Change the status of a *Request* to approved.
To change the status of the Request to approved you must provide
either a template id or a template tile.

**Kind**: instance method of [<code>RequestResource</code>](#RequestResource)  
**Returns**: <code>object</code> - The updated Request object.  

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
<a name="RequestResource+pending"></a>

### requestResource.pending(id) ⇒ <code>object</code>
Change the status of a *Request* to pending.

**Kind**: instance method of [<code>RequestResource</code>](#RequestResource)  
**Returns**: <code>object</code> - The updated Request object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Request object. |

