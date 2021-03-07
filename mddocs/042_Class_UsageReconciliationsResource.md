<a name="UsageReconciliationsResource"></a>

## UsageReconciliationsResource ⇐ <code>GenericResource</code>
The *UsageFileResource* class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [UsageReconciliationsResource](#UsageReconciliationsResource) ⇐ <code>GenericResource</code>
    * [new UsageReconciliationsResource(client)](#new_UsageReconciliationsResource_new)
    * [.processedfile(id)](#UsageReconciliationsResource+processedfile) ⇒ <code>UsageReconciliationResource</code>
    * [.uploadedfile(id)](#UsageReconciliationsResource+uploadedfile) ⇒ <code>UsageReconciliationResource</code>

<a name="new_UsageReconciliationsResource_new"></a>

### new UsageReconciliationsResource(client)
Creates a new instance of the *UsageReconciliationsResource* class.

**Returns**: <code>UsageRecordResource</code> - An instance of the *UsageFileResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="UsageReconciliationsResource+processedfile"></a>

### usageReconciliationsResource.processedfile(id) ⇒ <code>UsageReconciliationResource</code>
Get processed files.

**Kind**: instance method of [<code>UsageReconciliationsResource</code>](#UsageReconciliationsResource)  
**Returns**: <code>UsageReconciliationResource</code> - An instance of the *UsageReconciliationResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageReconciliationsResource+uploadedfile"></a>

### usageReconciliationsResource.uploadedfile(id) ⇒ <code>UsageReconciliationResource</code>
Get uploaded files.

**Kind**: instance method of [<code>UsageReconciliationsResource</code>](#UsageReconciliationsResource)  
**Returns**: <code>UsageReconciliationResource</code> - An instance of the *UsageReconciliationResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

