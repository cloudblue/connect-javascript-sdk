<a name="GenericResource"></a>

## GenericResource
The *GenericResource* map a generic endpoint of the CloudBlue
Connect API. Each API endpoint should extend this class and
implements endpoint specific actions and subresources access.

**Kind**: global class  
**Category**: Resources  

* [GenericResource](#GenericResource)
    * [new GenericResource(client, baseUri)](#new_GenericResource_new)
    * [.baseUri](#GenericResource+baseUri) : <code>string</code>
    * [.get(id)](#GenericResource+get) ⇒ <code>object</code>
    * [.create(obj)](#GenericResource+create) ⇒ <code>object</code>
    * [.update(id, obj)](#GenericResource+update) ⇒ <code>object</code>
    * [.delete(id)](#GenericResource+delete)
    * [.search(filters)](#GenericResource+search) ⇒ <code>Array</code>
    * [.fetch(url, options)](#GenericResource+fetch)

<a name="new_GenericResource_new"></a>

### new GenericResource(client, baseUri)

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | A *ConnectClient* instance. |
| baseUri | <code>string</code> | The base URI of the resource |

<a name="GenericResource+baseUri"></a>

### genericResource.baseUri : <code>string</code>
Returns the base URI of the resource mapped by this class.

**Kind**: instance property of [<code>GenericResource</code>](#GenericResource)  
<a name="GenericResource+get"></a>

### genericResource.get(id) ⇒ <code>object</code>
Retrieve a resource by its unique identifier.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  
**Returns**: <code>object</code> - The resource.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the resource to retrieve. |

<a name="GenericResource+create"></a>

### genericResource.create(obj) ⇒ <code>object</code>
Create a new resource.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  
**Returns**: <code>object</code> - The created resource.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | The resource to create. |

<a name="GenericResource+update"></a>

### genericResource.update(id, obj) ⇒ <code>object</code>
Update a resource.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  
**Returns**: <code>object</code> - The updated resource.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the resource to update. |
| obj | <code>object</code> | The eventually partial resource to update. |

<a name="GenericResource+delete"></a>

### genericResource.delete(id)
Delete a resource.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the resource to delete. |

<a name="GenericResource+search"></a>

### genericResource.search(filters) ⇒ <code>Array</code>
Search for a resource.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  
**Returns**: <code>Array</code> - An array of resources that match the provided filters.  

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>object</code> | The query to send to the server as a RQL object. |

<a name="GenericResource+fetch"></a>

### genericResource.fetch(url, options)
Fetch the URL and returns a response.

**Kind**: instance method of [<code>GenericResource</code>](#GenericResource)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the URL to fetch. |
| options | <code>object</code> | the request options. |

