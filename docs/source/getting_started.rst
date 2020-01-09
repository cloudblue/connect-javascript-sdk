Getting started
===============

Requirements
------------

The Cloud Blue Connect Javascript SDK depends on the following 3rd party packages:

* `lodash <https://lodash.com/>`_ version 4.17.15
* `node-fetch <https://github.com/node-fetch/node-fetch>`_ version 2.6.0
* `rql <https://github.com/persvr/rql>`_ version 0.3.3

Installation
------------

The current stable release of the Connect Javascript SDK is |release|.

To install the Connect Javascript SDK at the command prompt enter:

.. code-block:: sh

    $ npm install @cloudblueconnect/connect-javascript-sdk --save

Usage
-----

The ``connect-javascript-sdk`` allow you to consume the Connect public API
directly or using specialized methods to achieve tasks related to a specific
workflow.

High-level Usage
^^^^^^^^^^^^^^^^

.. code-block:: js

    const { ConnectClient, Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');
    const client = new ConnectClient('<api_endpoint>', '<api_key>');
    const fulfillment = new Fulfillment(client);

    const response = await fulfillment.approveRequestWithTemplate('<request_id>', '<template_id>');



Low-level Usage
^^^^^^^^^^^^^^^

You can access the API endpoints directly through the ``ConnectClient``.

The ``ConnectClient`` groups operations by the resource they access.

Create an instance of the `ConnectClient` class:

.. code-block:: js

    const { ConnectClient } = require('@cloudblueconnect/connect-javascript-sdk');

    const client = new ConnectClient('<api_endpoint>', '<api_key>');



For example to invoke the list operation for the `Product` resource:

.. code-block:: js

    client.products.list()
        .then(products => { console.log(products) });

Or if you prefer the async/await syntax:

.. code-block:: js

    const products = await client.products.list();
    console.log(products);

