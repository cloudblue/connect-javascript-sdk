const should = require('should');
const nock = require('nock');
const sinon = require('sinon');
const responses = require('../api/responses');

const { ConnectClient, Directory } = require('../../../index');
const { TierAccountResource } = require('../../../lib/connect/api');

describe('Connect Javascript SDK - Directory', () => {
  let sandbox;
  before(() => { sandbox = sinon.createSandbox(); });
  afterEach(done => { nock.cleanAll(); sandbox.restore(); done(); });
  it('returns a list of tier accounts', async () => {
    nock('https://localhost')
      .get('/tier/accounts')
      .reply(200, responses.tierAccounts.tier_accounts_list);
    const client = new ConnectClient('https://localhost', '1234567890');
    const d = new Directory(client);
    const response = await d.searchTierAccounts();
    response.should.be.an.Array();
  });
  it('returns a tier account by its id', async () => {
    nock('https://localhost')
      .get('/tier/accounts/TA-0000-0000-0000')
      .reply(200, responses.tierAccounts.tier_account);
    const client = new ConnectClient('https://localhost', '1234567890');
    const d = new Directory(client);
    const response = await d.getTierAccount('TA-0000-0000-0000');
    response.should.be.an.Object();
    response.should.have.a.property('id').eql('TA-0000-0000-0000');
  });
});