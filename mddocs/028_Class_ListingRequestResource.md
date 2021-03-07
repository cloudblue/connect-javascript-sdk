<a name="ListingRequestResource"></a>

## ListingRequestResource ⇐ <code>GenericResource</code>
The *ListingRequestResource* class provides methods to access the listing
requests endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [ListingRequestResource](#ListingRequestResource) ⇐ <code>GenericResource</code>
    * [new ListingRequestResource(client)](#new_ListingRequestResource_new)
    * [.cancel(id)](#ListingRequestResource+cancel)
    * [.complete(id)](#ListingRequestResource+complete)
    * [.deploy(id)](#ListingRequestResource+deploy)
    * [.refine(id)](#ListingRequestResource+refine)
    * [.submit(id)](#ListingRequestResource+submit)

<a name="new_ListingRequestResource_new"></a>

### new ListingRequestResource(client)
Creates a new instance of the *ListingRequestResource* class.

**Returns**: [<code>ListingRequestResource</code>](#ListingRequestResource) - An instance of the *ListingRequestResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="ListingRequestResource+cancel"></a>

### listingRequestResource.cancel(id)
Cancel the ListingRequest.

**Kind**: instance method of [<code>ListingRequestResource</code>](#ListingRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the ListingRequest object. |

<a name="ListingRequestResource+complete"></a>

### listingRequestResource.complete(id)
Complete the ListingRequest.

**Kind**: instance method of [<code>ListingRequestResource</code>](#ListingRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the ListingRequest object. |

<a name="ListingRequestResource+deploy"></a>

### listingRequestResource.deploy(id)
Deploy the ListingRequest.

**Kind**: instance method of [<code>ListingRequestResource</code>](#ListingRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the ListingRequest object. |

<a name="ListingRequestResource+refine"></a>

### listingRequestResource.refine(id)
Refine the ListingRequest.

**Kind**: instance method of [<code>ListingRequestResource</code>](#ListingRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the ListingRequest object. |

<a name="ListingRequestResource+submit"></a>

### listingRequestResource.submit(id)
Submit the ListingRequest.

**Kind**: instance method of [<code>ListingRequestResource</code>](#ListingRequestResource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the ListingRequest object. |

