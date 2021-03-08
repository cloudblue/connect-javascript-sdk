<a name="UsageReconciliationResource"></a>

## UsageReconciliationResource ⇐ <code>GenericResource</code>
The *UsageFileResource* class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [UsageReconciliationResource](#UsageReconciliationResource) ⇐ <code>GenericResource</code>
    * [new UsageReconciliationResource(client)](#new_UsageReconciliationResource_new)
    * [.processedFile(id)](#UsageReconciliationResource+processedFile) ⇒ [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)
    * [.uploadedFile(id)](#UsageReconciliationResource+uploadedFile) ⇒ [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)

<a name="new_UsageReconciliationResource_new"></a>

### new UsageReconciliationResource(client)
Creates a new instance of the *UsageReconciliationResource* class.

**Returns**: <code>UsageRecordResource</code> - An instance of the *UsageFileResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="UsageReconciliationResource+processedFile"></a>

### usageReconciliationResource.processedFile(id) ⇒ [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)
Get processed files.

**Kind**: instance method of [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)  
**Returns**: [<code>UsageReconciliationResource</code>](#UsageReconciliationResource) - An instance of the *UsageReconciliationResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageReconciliationResource+uploadedFile"></a>

### usageReconciliationResource.uploadedFile(id) ⇒ [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)
Get uploaded files.

**Kind**: instance method of [<code>UsageReconciliationResource</code>](#UsageReconciliationResource)  
**Returns**: [<code>UsageReconciliationResource</code>](#UsageReconciliationResource) - An instance of the *UsageReconciliationResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

