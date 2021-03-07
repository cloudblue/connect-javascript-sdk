<a name="UsageRecordResource"></a>

## UsageRecordResource ⇐ <code>GenericResource</code>
The *UsageFileResource* class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [UsageRecordResource](#UsageRecordResource) ⇐ <code>GenericResource</code>
    * [new UsageRecordResource(client)](#new_UsageRecordResource_new)
    * [.close(id, externalBillingId, externalBillingNote)](#UsageRecordResource+close) ⇒ <code>UsageChunkResource</code>
    * [.closeRecords(id, recordId, externalBillingId, externalBillingNote)](#UsageRecordResource+closeRecords) ⇒ <code>UsageChunkResource</code>

<a name="new_UsageRecordResource_new"></a>

### new UsageRecordResource(client)
Creates a new instance of the *UsageRecordResource* class.

**Returns**: [<code>UsageRecordResource</code>](#UsageRecordResource) - An instance of the *UsageFileResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="UsageRecordResource+close"></a>

### usageRecordResource.close(id, externalBillingId, externalBillingNote) ⇒ <code>UsageChunkResource</code>
Close all *Record File*.

**Kind**: instance method of [<code>UsageRecordResource</code>](#UsageRecordResource)  
**Returns**: <code>UsageChunkResource</code> - An instance of the *UsageChunkResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| externalBillingId | <code>string</code> | Id of the billing to close record |
| externalBillingNote | <code>string</code> | Note of the billing to close record |

<a name="UsageRecordResource+closeRecords"></a>

### usageRecordResource.closeRecords(id, recordId, externalBillingId, externalBillingNote) ⇒ <code>UsageChunkResource</code>
Close Records *Record File*.

**Kind**: instance method of [<code>UsageRecordResource</code>](#UsageRecordResource)  
**Returns**: <code>UsageChunkResource</code> - An instance of the *UsageChunkResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| recordId | <code>string</code> | Id of the record to  close |
| externalBillingId | <code>string</code> | Id of the billing to close record |
| externalBillingNote | <code>string</code> | Note of the billing to close record |

