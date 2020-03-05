## Classes

<dl>
<dt><a href="#AccountUserResource">AccountUserResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>AccountUserResource</em> allow consumers of the CloudBlue Connect
API to access information about <em>Users</em> related to an account.</p>
</dd>
<dt><a href="#AccountResource">AccountResource</a> ⇐ <code>GenericResource</code></dt>
<dd><p>The <em>AccountResource</em> class provides methods to access the accounts
endpoint of the Cloud Blue Connect API.</p>
</dd>
</dl>

<a name="AccountUserResource"></a>

## AccountUserResource ⇐ <code>GenericResource</code>
The *AccountUserResource* allow consumers of the CloudBlue Connect
API to access information about *Users* related to an account.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  
<a name="AccountResource"></a>

## AccountResource ⇐ <code>GenericResource</code>
The *AccountResource* class provides methods to access the accounts
endpoint of the Cloud Blue Connect API.

**Kind**: global class  
**Extends**: <code>GenericResource</code>  
**Category**: Resources  

* [AccountResource](#AccountResource) ⇐ <code>GenericResource</code>
    * [new AccountResource(client)](#new_AccountResource_new)
    * [.users(id)](#AccountResource+users) ⇒ [<code>AccountUserResource</code>](#AccountUserResource)

<a name="new_AccountResource_new"></a>

### new AccountResource(client)
Creates a new instance of the *AccountResource* class.

**Returns**: [<code>AccountResource</code>](#AccountResource) - An instance of the *AccountResource* class.  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>ConnectClient</code> | An instance of the *ConnectClient* class. |

<a name="AccountResource+users"></a>

### accountResource.users(id) ⇒ [<code>AccountUserResource</code>](#AccountUserResource)
Returns an instance of the *AccountUserResorce* class.

**Kind**: instance method of [<code>AccountResource</code>](#AccountResource)  
**Returns**: [<code>AccountUserResource</code>](#AccountUserResource) - An instance of *AccountUserResource*.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The account unique identifier. |

