## Classes

<dl>
<dt><a href="#AssetUsageAgregates">AssetUsageAgregates</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>AssetUsageAgregatesResource</em> class provides methods to access the
<em>AssetUsageAgregates</em> objects for a asset.</p>
</dd>
<dt><a href="#AssetResource">AssetResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>AssetResource</em> class provides methods to access the assets
endpoint of the Cloud Blue Connect API.</p>
</dd>
</dl>

<a name="AssetUsageAgregates"></a>

## AssetUsageAgregates ⇐ <code>GenericResource</code>
The *AssetUsageAgregatesResource* class provides methods to access the
*AssetUsageAgregates* objects for a asset.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="AssetResource"></a>

## AssetResource ⇐ <code>GenericResource</code>
The *AssetResource* class provides methods to access the assets
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [AssetResource](#AssetResource) ⇐ <code>GenericResource</code>
    * [new AssetResource(client)](#new_AssetResource_new)
    * [.usageAgregates(id)](#AssetResource+usageAgregates) ⇒ <code>AssetUsageAgregatesResource</code>

<a name="new_AssetResource_new"></a>

### new AssetResource(client)
Creates a new instance of the *AssetResource* class.

**Returns**: [<code>AssetResource</code>](#AssetResource) - An instance of the *AssetResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the *ConnectClient* class. |

<a name="AssetResource+usageAgregates"></a>

### assetResource.usageAgregates(id) ⇒ <code>AssetUsageAgregatesResource</code>
Returns an instance of the *AssetUsageAgregatesResource* for a *Asset*.

**Kind**: instance method of [<code>AssetResource</code>](#AssetResource)  
**Returns**: <code>AssetUsageAgregatesResource</code> - An instance of the *AssetUsageAgregatesResource*
                                          for the asset.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

