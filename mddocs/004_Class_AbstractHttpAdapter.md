## Classes

<dl>
<dt><a href="#AbstractHttpAdapter">AbstractHttpAdapter</a></dt>
<dd><p>The <em>AbstractHttpAdapter</em> class allow a CloudBlue Connect SDK consumer
to wrap a preferred http client library and adapt requests and responses
to in order to work with this SDK.</p>
</dd>
<dt><a href="#DefaultHttpAdapter">DefaultHttpAdapter</a> ⇐ <code><a href="#AbstractHttpAdapter">AbstractHttpAdapter</a></code></dt>
<dd><p>The <em>DefaultHttpAdapter</em> is the default adapter used in the
CloudBlue Connect Javascript SDK based on the node-fetch http
client library.</p>
</dd>
</dl>

<a name="AbstractHttpAdapter"></a>

## AbstractHttpAdapter
The *AbstractHttpAdapter* class allow a CloudBlue Connect SDK consumer
to wrap a preferred http client library and adapt requests and responses
to in order to work with this SDK.

**Kind**: global class  
**Category**: Base  

* [AbstractHttpAdapter](#AbstractHttpAdapter)
    * [new AbstractHttpAdapter(fetch)](#new_AbstractHttpAdapter_new)
    * [.beforeRequest](#AbstractHttpAdapter+beforeRequest) ⇒ <code>Array</code>

<a name="new_AbstractHttpAdapter_new"></a>

### new AbstractHttpAdapter(fetch)
Create a subclass of AbstractHttpAdapter


| Param | Type | Description |
| --- | --- | --- |
| fetch | <code>function</code> | the fetch function used to make the actual http call. |

<a name="AbstractHttpAdapter+beforeRequest"></a>

### abstractHttpAdapter.beforeRequest ⇒ <code>Array</code>
Get or set a list of beforeRequest hook functions.

**Kind**: instance property of [<code>AbstractHttpAdapter</code>](#AbstractHttpAdapter)  
**Returns**: <code>Array</code> - Array of hooks.  
<a name="DefaultHttpAdapter"></a>

## DefaultHttpAdapter ⇐ [<code>AbstractHttpAdapter</code>](#AbstractHttpAdapter)
The *DefaultHttpAdapter* is the default adapter used in the
CloudBlue Connect Javascript SDK based on the node-fetch http
client library.

**Kind**: global class  
**Extends**: [<code>AbstractHttpAdapter</code>](#AbstractHttpAdapter)  
**Category**: Base  
<a name="AbstractHttpAdapter+beforeRequest"></a>

### defaultHttpAdapter.beforeRequest ⇒ <code>Array</code>
Get or set a list of beforeRequest hook functions.

**Kind**: instance property of [<code>DefaultHttpAdapter</code>](#DefaultHttpAdapter)  
**Overrides**: [<code>beforeRequest</code>](#AbstractHttpAdapter+beforeRequest)  
**Returns**: <code>Array</code> - Array of hooks.  
