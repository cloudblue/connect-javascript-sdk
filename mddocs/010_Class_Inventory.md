<a name="Inventory"></a>

## Inventory
The Inventory class exposes specialized methods to help
developers to access the inventory (products, items etc).

**Kind**: global class  
**Category**: Operations  

* [Inventory](#Inventory)
    * [new Inventory(client)](#new_Inventory_new)
    * [.getParametersByProduct(id)](#Inventory+getParametersByProduct) ⇒ <code>Array</code>
    * [.getAssetParametersForFulfillmentByProduct(id)](#Inventory+getAssetParametersForFulfillmentByProduct) ⇒ <code>Array</code>
    * [.getProductTemplates(id)](#Inventory+getProductTemplates) ⇒ <code>Array</code>
    * [.getProductAssetTemplates(id)](#Inventory+getProductAssetTemplates) ⇒ <code>Array</code>

<a name="new_Inventory_new"></a>

### new Inventory(client)
Creates an instance of the Inventory class.

**Returns**: [<code>Inventory</code>](#Inventory) - An instance of the Inventory class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="Inventory+getParametersByProduct"></a>

### inventory.getParametersByProduct(id) ⇒ <code>Array</code>
Retrieves the list of parameters configured for the product.

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: <code>Array</code> - An array with the Parameter objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique product identifier for which retrieve the parameters. |

<a name="Inventory+getAssetParametersForFulfillmentByProduct"></a>

### inventory.getAssetParametersForFulfillmentByProduct(id) ⇒ <code>Array</code>
Retrieves the list of parameters of scope asset and phase fulfillment configured for
the product.

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: <code>Array</code> - An array with the Parameter objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique product identifier for which retrieve the parameters. |

<a name="Inventory+getProductTemplates"></a>

### inventory.getProductTemplates(id) ⇒ <code>Array</code>
Returns the list of templates configured for a product.

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: <code>Array</code> - An array of Template objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the product. |

<a name="Inventory+getProductAssetTemplates"></a>

### inventory.getProductAssetTemplates(id) ⇒ <code>Array</code>
Returns the list of templates configured for a product with scope "asset".

**Kind**: instance method of [<code>Inventory</code>](#Inventory)  
**Returns**: <code>Array</code> - An array of Template objects.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the product. |

