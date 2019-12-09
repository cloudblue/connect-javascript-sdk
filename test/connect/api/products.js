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
            .reply(200,responses.products.product_parameters);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getParametersByProduct('PRD-000-000-000')        
        response.should.be.an.Array();
        response.should.have.size(2);
        response[0].should.have.property('id');
        response[0].should.have.property('scope');
        response[0].should.have.property('phase');
    });
    it('returns the list of parameters of scope asset and phase fulfillment configured for a product by product', async () => {
      nock('https://localhost')
          .get('/products/PRD-000-000-000/parameters')
          .reply(200,responses.products.product_parameters);
      const client = new ConnectClient('https://localhost', '1234567890');
      const response = await client.products.getAssetParametersForFulfillmentByProduct('PRD-000-000-000')        
      response.should.be.an.Array();
      response.should.have.size(1);
      response[0].should.have.property('id');
      response[0].should.have.property('scope').eql('asset');
      response[0].should.have.property('phase').eql('fulfillment');
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
    it('returns a list of templates configured for the product with scope="asset"', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/templates')
            .reply(200, responses.products.templates_by_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getProductAssetTemplates('PRD-000-000-000');        
        response.should.be.an.Array();
        response.should.have.size(2);
        response.forEach(element => {
            element.should.have.property('id');
            element.should.have.property('title');
            element.should.have.property('scope').eql('asset');
        });
    });
});
