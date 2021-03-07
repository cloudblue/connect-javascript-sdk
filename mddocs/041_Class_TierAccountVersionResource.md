## Classes

<dl>
<dt><a href="#TierAccountVersionResource">TierAccountVersionResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>TierAccountVersionResource</em> class provides methods to access the
<em>Version</em> objects for a tier account.</p>
</dd>
<dt><a href="#TierAccountResource">TierAccountResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>TierAccountResource</em> class provides methods to access the tier accounts
endpoint of the Cloud Blue Connect API.</p>
</dd>
</dl>

<a name="TierAccountVersionResource"></a>

## TierAccountVersionResource ⇐ <code>GenericResource</code>
The *TierAccountVersionResource* class provides methods to access the
*Version* objects for a tier account.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="TierAccountResource"></a>

## TierAccountResource ⇐ <code>GenericResource</code>
The *TierAccountResource* class provides methods to access the tier accounts
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [TierAccountResource](#TierAccountResource) ⇐ <code>GenericResource</code>
    * [new TierAccountResource(client)](#new_TierAccountResource_new)
    * [.versions(id)](#TierAccountResource+versions) ⇒ [<code>TierAccountVersionResource</code>](#TierAccountVersionResource)

<a name="new_TierAccountResource_new"></a>

### new TierAccountResource(client)
Creates a new instance of the *TierAccountResource* class.

**Returns**: [<code>TierAccountResource</code>](#TierAccountResource) - An instance of the *TierAccountResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="TierAccountResource+versions"></a>

### tierAccountResource.versions(id) ⇒ [<code>TierAccountVersionResource</code>](#TierAccountVersionResource)
Returns an instance of the *TierAccountVersionResource* for a *TierAccount*.

**Kind**: instance method of [<code>TierAccountResource</code>](#TierAccountResource)  
**Returns**: [<code>TierAccountVersionResource</code>](#TierAccountVersionResource) - An instance of the *TierAccountVersionResource*
                                    for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *TierAccount*. |

