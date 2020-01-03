/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const { Query } = require('rql/query');
const responses = require('./responses');

const ConnectClient = require('../../../index').ConnectClient;

describe('Connect Javascript SDK - Products', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of published products (latest version)', async () => {
        nock('https://localhost')
            .get('/products')
            .query({
                    'eq(status,published)': '',
                    'eq(latest,true)': '',
                    limit: 100,
                    offset: 0
                }
            )
            .reply(200, responses.products.published_products);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.list({query: new Query().eq('status', 'published').eq('latest', true)});        
        response.should.be.an.Array();
        response.should.have.size(1);
        response[0].should.have.property('id').eql('PRD-000-000-000');
        response[0].should.have.property('name').eql('Product');
    });
    it('returns the list of parameters configured for a product by product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/parameters')
            .reply(200,responses.products.product_parameters);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getParameters('PRD-000-000-000')        
        response.should.be.an.Array();
        response.should.have.size(2);
        response[0].should.have.property('id');
        response[0].should.have.property('scope');
        response[0].should.have.property('phase');
    });
    it('returns the list of items configured of a product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/items')
            .reply(200,responses.products.product_items);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getItems('PRD-000-000-000')        
        response.should.be.an.Array();
        response.should.have.size(1);
        response[0].should.have.property('id');
        response[0].should.have.property('mpn');
        response[0].should.have.property('local_id');
    });
    it('returns the list of connections configured of a product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/connections')
            .reply(200,responses.products.product_connections);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getConnections('PRD-000-000-000')        
        response.should.be.an.Array();
        response.should.have.size(2);
        response[0].should.have.property('id');
        response[0].should.have.property('type');
        response[0].should.have.property('hub');
    });
    it('returns the list of configuration related to a product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/configurations')
            .query({limit: 100, offset: 0})
            .reply(200,responses.products.product_configurations);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.configurations('PRD-000-000-000').list();       
        response.should.be.an.Array();
        response.should.have.size(1);
        response[0].should.have.property('value');
        response[0].should.have.property('parameter');
    });
    it('returns a list of templates configured for the product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/templates')
            .reply(200, responses.products.templates_by_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getTemplates('PRD-000-000-000');        
        response.should.be.an.Array();
        response.should.have.size(4);
        response.forEach(element => {
            element.should.have.property('id');
            element.should.have.property('title');
        });
    });
});
