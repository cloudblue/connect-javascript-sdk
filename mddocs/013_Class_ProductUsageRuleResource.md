## Classes

<dl>
<dt><a href="#ProductActionResource">ProductActionResource</a></dt>
<dd><p>The <em>ProductActionResource</em> class provides methods to access the
<em>Action</em> objects for a product.</p>
</dd>
<dt><a href="#ProductVersionResource">ProductVersionResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductVersionResource</em> class provides methods to access the
<em>Version</em> objects for a product.</p>
</dd>
<dt><a href="#ProductConfigurationResource">ProductConfigurationResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductConfigurationResource</em> class provides methods to access the
<em>ProductConfiguration</em> objects for a product.</p>
</dd>
<dt><a href="#ProductParameterResource">ProductParameterResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductParameterResource</em> class provides methods to access the
<em>Productpameter</em> objects for a product.</p>
</dd>
<dt><a href="#ProductConnectionsResource">ProductConnectionsResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductConnectionsResource</em> class provides methods to access the
<em>ProductConnection</em> objects for a product.</p>
</dd>
<dt><a href="#ProductUsageRuleResource">ProductUsageRuleResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductUsageRulesResource</em> class provides methods to access the
<em>ProductUsageRule</em> objects for a product.</p>
</dd>
<dt><a href="#ProductResource">ProductResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>ProductResource</em> class provides methods to access the products
endpoint of the Cloud Blue Connect API.</p>
</dd>
</dl>

<a name="ProductActionResource"></a>

## ProductActionResource
The *ProductActionResource* class provides methods to access the
*Action* objects for a product.

**Kind**: global class  
**Category**: Resources  
<a name="ProductActionResource+link"></a>

### productActionResource.link(id, assetId) ⇒ <code>object</code>
Returns the *ActionLink* object for a product and asset.

**Kind**: instance method of [<code>ProductActionResource</code>](#ProductActionResource)  
**Returns**: <code>object</code> - The *ActionLink* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Action*. |
| assetId | <code>string</code> | The unique identifier of the *Asset*. |

<a name="ProductVersionResource"></a>

## ProductVersionResource ⇐ <code>GenericResource</code>
The *ProductVersionResource* class provides methods to access the
*Version* objects for a product.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [ProductVersionResource](#ProductVersionResource) ⇐ <code>GenericResource</code>
    * [new ProductVersionResource(client, baseUri)](#new_ProductVersionResource_new)
    * [.actions(id)](#ProductVersionResource+actions) ⇒ [<code>ProductActionResource</code>](#ProductActionResource)

<a name="new_ProductVersionResource_new"></a>

### new ProductVersionResource(client, baseUri)
Creates a new instance of the *ProductVersionResource* class.

**Returns**: [<code>ProductVersionResource</code>](#ProductVersionResource) - An instance of the *ProductVersionResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the *ConnectClient* class. |
| baseUri | <code>string</code> | The base uri for this resource. |

<a name="ProductVersionResource+actions"></a>

### productVersionResource.actions(id) ⇒ [<code>ProductActionResource</code>](#ProductActionResource)
Returns an instance of the *ProductActionResource* class
to access the *Action* objects configured for a specific
version of a *Product*.

**Kind**: instance method of [<code>ProductVersionResource</code>](#ProductVersionResource)  
**Returns**: [<code>ProductActionResource</code>](#ProductActionResource) - The instance of the *ProductActionResource*
                                   class for a product/version.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Version* object                                    for a *Product*. |

<a name="ProductConfigurationResource"></a>

## ProductConfigurationResource ⇐ <code>GenericResource</code>
The *ProductConfigurationResource* class provides methods to access the
*ProductConfiguration* objects for a product.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="ProductParameterResource"></a>

## ProductParameterResource ⇐ <code>GenericResource</code>
The *ProductParameterResource* class provides methods to access the
*Productpameter* objects for a product.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="ProductConnectionsResource"></a>

## ProductConnectionsResource ⇐ <code>GenericResource</code>
The *ProductConnectionsResource* class provides methods to access the
*ProductConnection* objects for a product.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="ProductUsageRuleResource"></a>

## ProductUsageRuleResource ⇐ <code>GenericResource</code>
The *ProductUsageRulesResource* class provides methods to access the
*ProductUsageRule* objects for a product.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="ProductResource"></a>

## ProductResource ⇐ <code>GenericResource</code>
The *ProductResource* class provides methods to access the products
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [ProductResource](#ProductResource) ⇐ <code>GenericResource</code>
    * [new ProductResource(client)](#new_ProductResource_new)
    * [.actions(id)](#ProductResource+actions) ⇒ [<code>ProductActionResource</code>](#ProductActionResource)
    * [.versions(id)](#ProductResource+versions) ⇒ [<code>ProductVersionResource</code>](#ProductVersionResource)
    * [.configurations(id)](#ProductResource+configurations) ⇒ [<code>ProductConfigurationResource</code>](#ProductConfigurationResource)
    * [.parameters(id)](#ProductResource+parameters) ⇒ [<code>ProductParameterResource</code>](#ProductParameterResource)
    * [.connections(id)](#ProductResource+connections) ⇒ [<code>ProductConnectionsResource</code>](#ProductConnectionsResource)
    * [.usageRules(id)](#ProductResource+usageRules) ⇒ [<code>ProductUsageRuleResource</code>](#ProductUsageRuleResource)
    * [.getTemplates(id)](#ProductResource+getTemplates) ⇒ <code>Array</code>
    * ~~[.getParameters(id)](#ProductResource+getParameters) ⇒ <code>Array</code>~~
    * [.getItems(id)](#ProductResource+getItems) ⇒ <code>Array</code>
    * [.getConnections(id)](#ProductResource+getConnections) ⇒ <code>Array</code>

<a name="new_ProductResource_new"></a>

### new ProductResource(client)
Creates a new instance of the *ProductResource* class.

**Returns**: [<code>ProductResource</code>](#ProductResource) - An instance of the *ProductResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the *ConnectClient* class. |

<a name="ProductResource+actions"></a>

### productResource.actions(id) ⇒ [<code>ProductActionResource</code>](#ProductActionResource)
Returns an instance of the *ProductActionResource* for a *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductActionResource</code>](#ProductActionResource) - An instance of the *ProductActionResource*
                                   for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+versions"></a>

### productResource.versions(id) ⇒ [<code>ProductVersionResource</code>](#ProductVersionResource)
Returns an instance of the *ProductVersionResource* for a *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductVersionResource</code>](#ProductVersionResource) - An instance of the *ProductVersionResource*
                                    for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+configurations"></a>

### productResource.configurations(id) ⇒ [<code>ProductConfigurationResource</code>](#ProductConfigurationResource)
Returns an instance of the *ProductConfigurationResource* for a *ProductConfiguration*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductConfigurationResource</code>](#ProductConfigurationResource) - An instance of the *ProductConfigurationResource*
                                          for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+parameters"></a>

### productResource.parameters(id) ⇒ [<code>ProductParameterResource</code>](#ProductParameterResource)
Returns an instance of the *ProductParameterResource* for a *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductParameterResource</code>](#ProductParameterResource) - An instance of the *ProductParameterResource*
                                          for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+connections"></a>

### productResource.connections(id) ⇒ [<code>ProductConnectionsResource</code>](#ProductConnectionsResource)
Returns an instance of the *ProductConnectionsResource* for a *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductConnectionsResource</code>](#ProductConnectionsResource) - An instance of the *ProductParameterResource*
                                          for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+usageRules"></a>

### productResource.usageRules(id) ⇒ [<code>ProductUsageRuleResource</code>](#ProductUsageRuleResource)
Returns an instance of the *ProductUsageRulesResource* for a *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: [<code>ProductUsageRuleResource</code>](#ProductUsageRuleResource) - An instance of the *ProductUsageRuleResource*
                                          for the product.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+getTemplates"></a>

### productResource.getTemplates(id) ⇒ <code>Array</code>
Returns the list of *Template* objects configured for the *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: <code>Array</code> - The list of *Template* objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+getParameters"></a>

### ~~productResource.getParameters(id) ⇒ <code>Array</code>~~
***Deprecated***

Returns the list of *Parameter* objects configured for the *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: <code>Array</code> - The list of *Parameter* objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+getItems"></a>

### productResource.getItems(id) ⇒ <code>Array</code>
Returns the list of *ProductItem* objects configured for the *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: <code>Array</code> - The list of *ProductItem* objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

<a name="ProductResource+getConnections"></a>

### productResource.getConnections(id) ⇒ <code>Array</code>
Returns the list of *Connection* objects configured for the *Product*.

**Kind**: instance method of [<code>ProductResource</code>](#ProductResource)  
**Returns**: <code>Array</code> - The list of *Connection* objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Product*. |

