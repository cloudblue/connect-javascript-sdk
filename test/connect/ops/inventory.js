const should = require('should');
const nock = require('nock');
const sinon = require('sinon');
const responses = require('../api/responses');

const { ConnectClient, Inventory } = require('../../../index');
const { TierAccountResource } = require('../../../lib/connect/api');

describe('Connect Javascript SDK - Inventory', () => {
  let sandbox;
  before(() => { sandbox = sinon.createSandbox(); });
  afterEach(done => { nock.cleanAll(); sandbox.restore(); done(); });
  it('returns the list of parameters configured for a product by product', async () => {
    nock('https://localhost')
        .get('/products/PRD-000-000-000/parameters')
        .reply(200,responses.products.product_parameters);
    const client = new ConnectClient('https://localhost', '1234567890');
    const inventory = new Inventory(client);
    const response = await inventory.getParametersByProduct('PRD-000-000-000')        
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
  const inventory = new Inventory(client);
  const response = await inventory.getAssetParametersForFulfillmentByProduct('PRD-000-000-000')        
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
    const inventory = new Inventory(client);
    const response = await inventory.getProductTemplates('PRD-000-000-000');        
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
    const inventory = new Inventory(client);
    const response = await inventory.getProductAssetTemplates('PRD-000-000-000');        
    response.should.be.an.Array();
    response.should.have.size(2);
    response.forEach(element => {
        element.should.have.property('id');
        element.should.have.property('title');
        element.should.have.property('scope').eql('asset');
    });
});
});