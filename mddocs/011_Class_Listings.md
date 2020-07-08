<a name="Listings"></a>

## Listings
The Listings class exposes specialized methods to help
developers to handle listings and listing requests.

**Kind**: global class  
**Category**: Operations  

* [Listings](#Listings)
    * [new Listings(client)](#new_Listings_new)
    * [.searchListingRequests(query)](#Listings+searchListingRequests) ⇒ <code>Array</code>
    * [.createListingRequest(request)](#Listings+createListingRequest) ⇒ <code>object</code>
    * [.getListingRequest(id)](#Listings+getListingRequest) ⇒ <code>object</code>
    * [.submitListingRequest(id)](#Listings+submitListingRequest) ⇒ <code>object</code>
    * [.cancelListingRequest(id)](#Listings+cancelListingRequest) ⇒ <code>object</code>
    * [.refineListingRequest(id)](#Listings+refineListingRequest) ⇒ <code>object</code>
    * [.completeListingRequest(id)](#Listings+completeListingRequest) ⇒ <code>object</code>
    * [.deployListingRequest(id)](#Listings+deployListingRequest) ⇒ <code>object</code>

<a name="new_Listings_new"></a>

### new Listings(client)
Creates an instance of the Listings class.

**Returns**: [<code>Listings</code>](#Listings) - An instance of the Listings class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="Listings+searchListingRequests"></a>

### listings.searchListingRequests(query) ⇒ <code>Array</code>
Returns a list of *ListingRequest* objects that match the provided
(optional) query.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>Array</code> - An array of *ListingRequest* object optionally matching
                              the provided query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The optional query to filter results. |

<a name="Listings+createListingRequest"></a>

### listings.createListingRequest(request) ⇒ <code>object</code>
Creates a new *ListingRequest*

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The created ListingRequest object.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>object</code> | The ListingRequest object. |

<a name="Listings+getListingRequest"></a>

### listings.getListingRequest(id) ⇒ <code>object</code>
Retrieve the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

<a name="Listings+submitListingRequest"></a>

### listings.submitListingRequest(id) ⇒ <code>object</code>
Submit the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

<a name="Listings+cancelListingRequest"></a>

### listings.cancelListingRequest(id) ⇒ <code>object</code>
Cancel the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

<a name="Listings+refineListingRequest"></a>

### listings.refineListingRequest(id) ⇒ <code>object</code>
Refine the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

<a name="Listings+completeListingRequest"></a>

### listings.completeListingRequest(id) ⇒ <code>object</code>
Complete the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

<a name="Listings+deployListingRequest"></a>

### listings.deployListingRequest(id) ⇒ <code>object</code>
Deploy the *ListingRequest* object identified by its id.

**Kind**: instance method of [<code>Listings</code>](#Listings)  
**Returns**: <code>object</code> - The *ListingRequest* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *ListingRequest* object. |

