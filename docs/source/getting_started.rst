Getting started
===============

Requirements
------------

The Cloud Blue Connect Javascript SDK depends on the following 3rd party packages:

* `lodash <https://lodash.com/>`_ version 4.17.15
* `node-fetch <https://www.npmjs.com/package/node-fetch>`_ version 2.6.0

Installation
------------

The current stable release of the Connect Javascript SDK is |release|.

To install the Connect Javascript SDK at the command prompt enter:

.. code-block:: sh

    $ npm install @cloudblueconnect/connect-javascript-sdk --save

Usage
-----

Create an instance of the `ConnectClient` class:

.. code-block:: js

    const { ConnectClient } = require('@cloudblueconnect/connect-javascript-sdk');

    const client = new ConnectClient('<api_endpoint>', '<api_key>');


The `ConnectClient` groups operations by the resource they access.
For example to invoke the list operation for the `Product` resource:

.. code-block:: js

    client.products.list()
        .then(products => { console.log(products) });

Or if you prefer the async/await syntax:

.. code-block:: js

    const products = await client.products.list();
    console.log(products);

