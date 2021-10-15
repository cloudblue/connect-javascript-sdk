## Classes

<dl>
<dt><a href="#HttpError">HttpError</a> ⇐ <code>Error</code></dt>
<dd><p>HttpError wraps any http response which status is != 2xx.</p>
</dd>
<dt><a href="#APIError">APIError</a> ⇐ <code><a href="#HttpError">HttpError</a></code></dt>
<dd><p>APIError wraps CloudBlue Connect API errors.
Provides convenient methods to obtains error
code and error messages.
The Cloud Blue Connect JSON error looks like:</p>
</dd>
</dl>

<a name="HttpError"></a>

## HttpError ⇐ <code>Error</code>
HttpError wraps any http response which status is != 2xx.

**Kind**: global class  
**Extends**: <code>Error</code>  
**Category**: Base  

* [HttpError](#HttpError) ⇐ <code>Error</code>
    * [new HttpError(status, message)](#new_HttpError_new)
    * [.status](#HttpError+status) : <code>number</code>

<a name="new_HttpError_new"></a>

### new HttpError(status, message)
Create a new instance of the HttpError class.


| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | the http status code. |
| message | <code>string</code> | an error message. |

<a name="HttpError+status"></a>

### httpError.status : <code>number</code>
The http status code.

**Kind**: instance property of [<code>HttpError</code>](#HttpError)  
<a name="APIError"></a>

## APIError ⇐ [<code>HttpError</code>](#HttpError)
APIError wraps CloudBlue Connect API errors.
Provides convenient methods to obtains error
code and error messages.
The Cloud Blue Connect JSON error looks like:

**Kind**: global class  
**Extends**: [<code>HttpError</code>](#HttpError)  
**Category**: Resources  

* [APIError](#APIError) ⇐ [<code>HttpError</code>](#HttpError)
    * [new APIError(status, message)](#new_APIError_new)
    * [.json](#APIError+json) ⇒ <code>object</code>
    * [.errorCode](#APIError+errorCode) ⇒ <code>string</code>
    * [.errors](#APIError+errors) ⇒ <code>Array</code>
    * [.status](#HttpError+status) : <code>number</code>

<a name="new_APIError_new"></a>

### new APIError(status, message)
Create a new instance of the APIError class.


| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | the http status code. |
| message | <code>string</code> | A JSON parseable object. |

**Example**  
```js
{
   "error_code": "SYS_001",
   "errors": [
      "error message 1"
   ]
}
```
<a name="APIError+json"></a>

### apiError.json ⇒ <code>object</code>
Returns the JSON error object.

**Kind**: instance property of [<code>APIError</code>](#APIError)  
**Returns**: <code>object</code> - The error object.  
<a name="APIError+errorCode"></a>

### apiError.errorCode ⇒ <code>string</code>
Returns the error code.

**Kind**: instance property of [<code>APIError</code>](#APIError)  
**Returns**: <code>string</code> - The error code.  
<a name="APIError+errors"></a>

### apiError.errors ⇒ <code>Array</code>
Returns an array of error messages.

**Kind**: instance property of [<code>APIError</code>](#APIError)  
**Returns**: <code>Array</code> - The error messages.  
<a name="HttpError+status"></a>

### apiError.status : <code>number</code>
The http status code.

**Kind**: instance property of [<code>APIError</code>](#APIError)  
**Overrides**: [<code>status</code>](#HttpError+status)  
