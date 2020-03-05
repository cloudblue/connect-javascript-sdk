<a name="ConversationResource"></a>

## ConversationResource ⇐ <code>GenericResource</code>
The *ConversationResource* class provides methods to access the conversations
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [ConversationResource](#ConversationResource) ⇐ <code>GenericResource</code>
    * [new ConversationResource(client)](#new_ConversationResource_new)
    * [.getConversationsByObjectId(id)](#ConversationResource+getConversationsByObjectId) ⇒ <code>Array</code>
    * [.createMessage(id, msg)](#ConversationResource+createMessage) ⇒ <code>object</code>

<a name="new_ConversationResource_new"></a>

### new ConversationResource(client)
Creates a new instance of the *ConversationResource* class.

**Returns**: [<code>ConversationResource</code>](#ConversationResource) - An instance of the *ConversationResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the ConnectClient class. |

<a name="ConversationResource+getConversationsByObjectId"></a>

### conversationResource.getConversationsByObjectId(id) ⇒ <code>Array</code>
Returns a list of conversations attached to the business object specified by its id.

**Kind**: instance method of [<code>ConversationResource</code>](#ConversationResource)  
**Returns**: <code>Array</code> - A list of conversations attached to a business object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique id of the business object attached to a conversation. |

<a name="ConversationResource+createMessage"></a>

### conversationResource.createMessage(id, msg) ⇒ <code>object</code>
Add a message to a *Conversation* object.

**Kind**: instance method of [<code>ConversationResource</code>](#ConversationResource)  
**Returns**: <code>object</code> - The newly created *Message* object.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the Conversation object. |
| msg | <code>string</code> | The text of the message to post. |

