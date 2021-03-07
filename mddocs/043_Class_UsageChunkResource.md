<a name="UsageChunkResource"></a>

## UsageChunkResource ⇐ <code>GenericResource</code>
The *UsageFileResource* class provides methods to access the usage file
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [UsageChunkResource](#UsageChunkResource) ⇐ <code>GenericResource</code>
    * [new UsageChunkResource(client)](#new_UsageChunkResource_new)
    * [.close(id, externalBillingId, externalBillingNote)](#UsageChunkResource+close) ⇒ [<code>UsageChunkResource</code>](#UsageChunkResource)
    * [.download(id)](#UsageChunkResource+download) ⇒ <code>UsageChunckResource</code>
    * [.regenerate(id)](#UsageChunkResource+regenerate) ⇒ <code>UsageChunckResource</code>

<a name="new_UsageChunkResource_new"></a>

### new UsageChunkResource(client)
Creates a new instance of the *UsageChunkResource* class.

**Returns**: [<code>UsageChunkResource</code>](#UsageChunkResource) - An instance of the *UsageFileResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="UsageChunkResource+close"></a>

### usageChunkResource.close(id, externalBillingId, externalBillingNote) ⇒ [<code>UsageChunkResource</code>](#UsageChunkResource)
Close *Chunk File*.

**Kind**: instance method of [<code>UsageChunkResource</code>](#UsageChunkResource)  
**Returns**: [<code>UsageChunkResource</code>](#UsageChunkResource) - An instance of the *UsageChunkResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |
| externalBillingId | <code>string</code> | Id of the billing to close chunk |
| externalBillingNote | <code>string</code> | Note of the billing to close chunk |

<a name="UsageChunkResource+download"></a>

### usageChunkResource.download(id) ⇒ <code>UsageChunckResource</code>
Download *Chunk File*.

**Kind**: instance method of [<code>UsageChunkResource</code>](#UsageChunkResource)  
**Returns**: <code>UsageChunckResource</code> - An instance of the *UsageChunkResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

<a name="UsageChunkResource+regenerate"></a>

### usageChunkResource.regenerate(id) ⇒ <code>UsageChunckResource</code>
Regenerate *Chunk File*.

**Kind**: instance method of [<code>UsageChunkResource</code>](#UsageChunkResource)  
**Returns**: <code>UsageChunckResource</code> - An instance of the *UsageChunkResource*  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Usage File*. |

