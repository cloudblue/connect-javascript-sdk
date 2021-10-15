## Classes

<dl>
<dt><a href="#CategoryUsageFileResource">CategoryUsageFileResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>CategoryUsageFileResource</em> class provides methods to access the
<em>categor</em> objects for a usage file.</p>
</dd>
<dt><a href="#UsageFileResource">UsageFileResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>UsageFileResource</em> class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.</p>
</dd>
</dl>

<a name="CategoryUsageFileResource"></a>

## CategoryUsageFileResource ⇐ <code>GenericResource</code>
The *CategoryUsageFileResource* class provides methods to access the
*categor* objects for a usage file.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="UsageFileResource"></a>

## UsageFileResource ⇐ <code>GenericResource</code>
The *UsageFileResource* class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [UsageFileResource](#UsageFileResource) ⇐ <code>GenericResource</code>
    * [new UsageFileResource(client)](#new_UsageFileResource_new)
    * [.categories(id)](#UsageFileResource+categories) ⇒ [<code>CategoryUsageFileResource</code>](#CategoryUsageFileResource)
    * [.accept(id, acceptanceNote)](#UsageFileResource+accept) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.approveAll(id)](#UsageFileResource+approveAll) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.close(id)](#UsageFileResource+close) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.delete(id)](#UsageFileResource+delete) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.reprocess(id)](#UsageFileResource+reprocess) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.submit(id)](#UsageFileResource+submit) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.reconciliation(id, reconFile)](#UsageFileResource+reconciliation) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.reject(id, rejectionNote)](#UsageFileResource+reject) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
    * [.upload(id, usageFile)](#UsageFileResource+upload) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)

<a name="new_UsageFileResource_new"></a>

### new UsageFileResource(client)
Creates a new instance of the *UsageFileResource* class.

**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="UsageFileResource+categories"></a>

### usageFileResource.categories(id) ⇒ [<code>CategoryUsageFileResource</code>](#CategoryUsageFileResource)
Returns an instance of the *CategoryUsageFileResource* for a *UsageFile*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>CategoryUsageFileResource</code>](#CategoryUsageFileResource) - An instance of the *CategoryUsageFileResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *UsageFile*. |

<a name="UsageFileResource+accept"></a>

### usageFileResource.accept(id, acceptanceNote) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Accept *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| acceptanceNote | <code>string</code> | Acceptance Note |

<a name="UsageFileResource+approveAll"></a>

### usageFileResource.approveAll(id) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Approve all *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageFileResource+close"></a>

### usageFileResource.close(id) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Close *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageFileResource+delete"></a>

### usageFileResource.delete(id) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Delete *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageFileResource+reprocess"></a>

### usageFileResource.reprocess(id) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Reprocess *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageFileResource+submit"></a>

### usageFileResource.submit(id) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Submit *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageFileResource+reconciliation"></a>

### usageFileResource.reconciliation(id, reconFile) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Reconciliation *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| reconFile | <code>binary</code> | Reconciliation binary file |

<a name="UsageFileResource+reject"></a>

### usageFileResource.reject(id, rejectionNote) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Reject *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| rejectionNote | <code>text</code> | Rejection note |

<a name="UsageFileResource+upload"></a>

### usageFileResource.upload(id, usageFile) ⇒ [<code>UsageFileResource</code>](#UsageFileResource)
Upload *Usage File*.

**Kind**: instance method of [<code>UsageFileResource</code>](#UsageFileResource)  
**Returns**: [<code>UsageFileResource</code>](#UsageFileResource) - An instance of the *UsageFileResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| usageFile | <code>binary</code> | File to upload |

