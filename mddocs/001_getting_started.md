## Introduction

The *CloudBlue Connect Javascript SDK* provides programmers with a set of classes that facilitate
the implementation of certain workflows for the *CloudBlue Connect* platform as long as direct access to public endpoints.


## Prerequisites

The *CloudBlue Connect Javascript SDK* has been tested against with [Node.js](https://nodejs.org) version 10 or later.

It also depends on the following 3rd party libraries:

* [ramda](https://ramdajs.com/) version 4.17.15
* [node-fetch](https://github.com/node-fetch/node-fetch) version 2.6.0


## Install

To add the *CloudBlue Connect Javascript SDK* to your project, executes the following command in your project's root folder:

```sh
$ npm install --save @cloudblueconnect/connect-javascript-sdk
```

## Usage with operation classes

The *CloudBlue Connect Javascript SDK* exposes to programmers the following set of "operation" classes:

* {@link Fulfillment}: offers methods such as creation, modification and inquiring of parameters for the management of transactional objects namely asset requests as well as tier configuration requests.
* {@link Directory}: offers methods to access persistent objects such as assets, tier configurations and accounts.
* {@link Inventory}: offers methods to manage products.


In order to use the *CloudBlue Connect Javascript SDK* first of all you must create an instance of the {@link ConnectClient} class.

```js
const { ConnectClient } = require('@cloudblueconnect/connect-javascript-sdk');

const client = new ConnectClient(apiUrl, apiKey);
```

And then you must create an instance of the corresponding operation class:

```js
const { Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');

const fulfillment = new Fulfillment(client);
```

### Examples

#### Create an asset purchase request

```js
const { ConnectClient, Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');

const client = new ConnectClient(apiUrl, apiKey);
const fulfillment = new Fulfillment(client);

const purchaseRequest = await fulfillment.createRequest(requestObj);
```

> **_NOTE:_** Please refer to the *CloudBlue Connect API* documentation to know how a purchase request object is defined.

#### Get the first 100 results of pending asset purchase requests

```js
const { ConnectClient, Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');

const client = new ConnectClient(apiUrl, apiKey);
const fulfillment = new Fulfillment(client);

const filter = {
    status: 'pending',
    limit: 100,
    offset: 0
}

const pendingRequests = await fulfillment.search(filter);
```

> **_NOTE:_**  Please see {@tutorial searches} for more informations on how to create filters.


## Direct access to public endpoints

Each public endpoint of the *CloudBlue Connect API* is mapped by a "Resource" class that provides
basic methods that implement CRUD operations against a resource.

Moreover each "Resource" class exposes related actions and eventually access to subresources.

Programmers can access "Resource" classes through the {@link ConnectClient} instance.

### Examples

#### Get a list of users belonging to an account.

```js
const { ConnectClient } = require('@cloudblueconnect/connect-javascript-sdk');

const client = new ConnectClient(apiUrl, apiKey);

const users = client.accounts.users('VA-000-000').search();
```

