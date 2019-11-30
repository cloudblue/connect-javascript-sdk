/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const ConnectClient = require('../../../index').ConnectClient;

describe('Connect Javascript SDK - Products', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of published products (latest version)', async () => {
        nock('https://localhost')
            .get('/products')
            .query({status: 'published', latest: true})
            .reply(200, responses.products.published_products);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.list();        
        response.should.be.an.Array();
        response.should.have.size(1);
        response[0].should.have.property('id').eql('PRD-000-000-000');
        response[0].should.have.property('name').eql('Product');
    });
    it('returns the list of parameters configured for a product by product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/parameters')
            .reply(200,[
                {
                  "id": "private-phoenixes-cssj",
                  "name": "admin_email",
                  "title": "Admin account email",
                  "description": "Enter the email for the admin account to receive the activation link",
                  "type": "text",
                  "scope": "asset",
                  "phase": "ordering",
                  "constraints": {
                    "hidden": false,
                    "required": true,
                    "unique": false
                  }
                },
                {
                  "id": "classy-cats-fycp",
                  "name": "activation_link",
                  "title": "Activation link",
                  "description": "The link to activate the account",
                  "type": "text",
                  "scope": "asset",
                  "phase": "fulfillment",
                  "constraints": {
                    "hidden": false,
                    "required": true,
                    "unique": false
                  }
                }
              ]);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getParametersByProduct('PRD-000-000-000')        
        response.should.be.an.Array();
        response.should.have.size(2);
        response[0].should.have.property('id');
        response[0].should.have.property('scope');
        response[0].should.have.property('phase');
    });
    it('returns a list of templates configured for the product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/templates')
            .reply(200, responses.products.templates_by_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getProductTemplates('PRD-000-000-000');        
        response.should.be.an.Array();
        response.should.have.size(4);
        response.forEach(element => {
            element.should.have.property('id');
            element.should.have.property('title');
        });
    });
});
