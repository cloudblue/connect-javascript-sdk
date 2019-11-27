/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');
const responses = require('./responses');

const ConnectClient = require('../index');

describe('Connect Javascript SDK - Products', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of published products (latest version)', async () => {
        nock('https://localhost')
            .get('/products')
            .query({status: 'published', latest: true})
            .reply(200, responses.products.published_products);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.list();        
        response.data.should.be.an.Array();
        response.data.should.have.size(1);
        response.data[0].should.have.property('id').eql('PRD-000-000-000');
        response.data[0].should.have.property('name').eql('Product');
    });
    it('returns a list of templates configured for the product', async () => {
        nock('https://localhost')
            .get('/products/PRD-000-000-000/templates')
            .reply(200, responses.products.templates_by_product);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.getProductTemplates('PRD-000-000-000');        
        response.data.should.be.an.Array();
        response.data.should.have.size(4);
        response.data.forEach(element => {
            element.should.have.property('id');
            element.should.have.property('title');
        });
    });
});
