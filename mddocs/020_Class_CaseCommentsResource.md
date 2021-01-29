## Classes

<dl>
<dt><a href="#CaseAttachmentsResource">CaseAttachmentsResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>CaseAttachmentResources</em> class provides methods to access the
<em>attachment</em> objects for a case.</p>
</dd>
<dt><a href="#CaseCommentsResource">CaseCommentsResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>CaseCommentsResources</em> class provides methods to access the
<em>comment</em> objects for a case.</p>
</dd>
<dt><a href="#CaseSettingsResource">CaseSettingsResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>CaseSettingsResources</em> class provides methods to access the
<em>setting</em> objects for a case.</p>
</dd>
<dt><a href="#CaseResource">CaseResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>CaseResource</em> class provides methods to access the case
endpoint of the CloudBlue Connect API.</p>
</dd>
</dl>

<a name="CaseAttachmentsResource"></a>

## CaseAttachmentsResource ⇐ <code>GenericResource</code>
The *CaseAttachmentResources* class provides methods to access the
*attachment* objects for a case.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="CaseCommentsResource"></a>

## CaseCommentsResource ⇐ <code>GenericResource</code>
The *CaseCommentsResources* class provides methods to access the
*comment* objects for a case.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="CaseSettingsResource"></a>

## CaseSettingsResource ⇐ <code>GenericResource</code>
The *CaseSettingsResources* class provides methods to access the
*setting* objects for a case.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="CaseResource"></a>

## CaseResource ⇐ <code>GenericResource</code>
The *CaseResource* class provides methods to access the case
endpoint of the CloudBlue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [CaseResource](#CaseResource) ⇐ <code>GenericResource</code>
    * [new CaseResource(client)](#new_CaseResource_new)
    * [.attachments(id)](#CaseResource+attachments) ⇒ [<code>CaseAttachmentsResource</code>](#CaseAttachmentsResource)
    * [.comments(id)](#CaseResource+comments) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
    * [.settings(id)](#CaseResource+settings) ⇒ [<code>CaseSettingsResource</code>](#CaseSettingsResource)
    * [.pend(id)](#CaseResource+pend) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
    * [.inquire(id)](#CaseResource+inquire) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
    * [.resolve(id)](#CaseResource+resolve) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
    * [.close(id)](#CaseResource+close) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)

<a name="new_CaseResource_new"></a>

### new CaseResource(client)
Creates a new instance of the *CaseResource* class.

**Returns**: [<code>CaseResource</code>](#CaseResource) - An instance of the *CaseResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="CaseResource+attachments"></a>

### caseResource.attachments(id) ⇒ [<code>CaseAttachmentsResource</code>](#CaseAttachmentsResource)
Returns an instance of the *CaseAttachmentsResource* for a *Case*.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseAttachmentsResource</code>](#CaseAttachmentsResource) - An instance of the *CaseAttachmentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+comments"></a>

### caseResource.comments(id) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
Returns an instance of the *CaseCommentsResource* for a *Case*.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseCommentsResource</code>](#CaseCommentsResource) - An instance of the *CaseCommentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+settings"></a>

### caseResource.settings(id) ⇒ [<code>CaseSettingsResource</code>](#CaseSettingsResource)
Returns an instance of the *CaseSettinsResource* for a *Case*.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseSettingsResource</code>](#CaseSettingsResource) - An instance of the *CaseSettingsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+pend"></a>

### caseResource.pend(id) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
Set *Case* to pend status.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseCommentsResource</code>](#CaseCommentsResource) - An instance of the *CaseCommentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+inquire"></a>

### caseResource.inquire(id) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
Set *Case* to inquire status.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseCommentsResource</code>](#CaseCommentsResource) - An instance of the *CaseCommentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+resolve"></a>

### caseResource.resolve(id) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
Set *Case* to resolve status.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseCommentsResource</code>](#CaseCommentsResource) - An instance of the *CaseCommentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

<a name="CaseResource+close"></a>

### caseResource.close(id) ⇒ [<code>CaseCommentsResource</code>](#CaseCommentsResource)
Set *Case* to close status.

**Kind**: instance method of [<code>CaseResource</code>](#CaseResource)  
**Returns**: [<code>CaseCommentsResource</code>](#CaseCommentsResource) - An instance of the *CaseCommentsResource*
                                    for the case.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the *Case*. |

