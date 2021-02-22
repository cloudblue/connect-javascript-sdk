/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */

const { converge, concat, compose, toUpper, head, tail } = require('ramda');
const CaseResource = require('../../../../lib/connect/api/cases');
const { ConnectClient } = require('../../../../index');

const capitalize = converge(concat, [compose(toUpper, head), tail]);

describe('CaseResource', () => {
  let client;

  const contentTypeJson = { 'content-type': 'application/json' };

  beforeAll(() => {
    client = new ConnectClient('https://localhost', '1234567890');
  });
  beforeEach(() => {
    fetch.resetMocks();
  });
 
  it('returns the attachment of the helpdesk case', async () => {
    const cases = new CaseResource(client);
    const attachment = [{ id: 'CA-000-000-000', name: 'test helpdesk case' }];
    fetch.mockResponseOnce(JSON.stringify(attachment), { status: 200, headers: contentTypeJson });
    await expect(cases.attachments('CA-000-000-000').search()).resolves.toEqual(attachment);
    expect(fetch).toBeCalledWith('https://localhost/helpdesk/cases/CA-000-000-000/attachments', expect.anything());
  });

  it('returns the settings of the helpdesk case', async () => {
    const cases = new CaseResource(client);
    const settings = [{ id: 'CA-000-000-000', name: 'test helpdesk case' }];
    fetch.mockResponseOnce(JSON.stringify(settings), { status: 200, headers: contentTypeJson });
    await expect(cases.settings('CA-000-000-000').search()).resolves.toEqual(settings);
    expect(fetch).toBeCalledWith('https://localhost/helpdesk/cases/CA-000-000-000/settings', expect.anything());
  });

  it.each([
    ['pend'],
    ['inquire'],
    ['resolve'],
    ['close'],
  ])('invoke the %s a action on a case request', async (action) => {
    const lstr = new CaseResource(client);
    fetch.mockResponseOnce('', { status: 200, headers: contentTypeJson });
    const method = lstr[action].bind(lstr);
    await method('CA-000-000-000');
    expect(fetch).toBeCalledWith(`https://localhost/helpdesk/cases/CA-000-000-000/${action}`, expect.anything());
  });
});

