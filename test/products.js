/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const should = require('should');
const nock = require('nock');

const ConnectClient = require('../index');

describe('Connect Javascript SDK - Products', () => {
    afterEach(done => { nock.cleanAll(); done(); });
    it('returns a list of published products (latest version)', async () => {
        nock('https://localhost')
            .get('/products')
            .query({status: 'published', latest: true})
                .reply(200, [
                    {
                        id: 'PRD-000-000-000',
                        name: 'Product',
                        icon: '/media/VA-322-392/PRD-350-146-687/media/PRD-350-146-687-logo_xYmEUml.png',
                        status: 'published',
                        short_description: 'Manage SSH access for your team to thousands of hosts using a SSH certification authority',
                        detailed_description: '## Overview\n\nThe service gives companies a majority of the same benefits that on-premises deployments provide. By integrating with the cloud service, companies can expand their market share, automate and grow recurring revenue, increase customer satisfaction, and cut operational costs at the same time.',
                        published_at: '2019-11-15T09:18:40+00:00',
                        configurations: {
                        suspend_resume_supported: true,
                        requires_reseller_information: true
                        },
                        customer_ui_settings: {
                        description: 'We are happy to provide you the Cloud Service - an ultimate solution for your company. Stop using the legacy on-premises solution on your computer. Move to the cloud with our help.',
                        getting_started: 'You are now ready to use the Cloud Service and migrate the files from your local computer and mobile devices to the cloud. Download apps for Windows Desktop, Windows Phone, Mac OS or Android following one of the links below, or access the service web interface directly.',
                        download_links: [
                            {
                            title: 'Windows',
                            url: 'https://example.com/download/windows',
                            visible_for: 'admin'
                            },
                            {
                            title: 'macOS',
                            url: 'https://example.com/download/macos',
                            visible_for: 'admin'
                            },
                            {
                            title: 'iPhone',
                            url: 'https://example.com/download/iphone',
                            visible_for: 'admin'
                            },
                            {
                            title: 'Android',
                            url: 'https://example.com/download/android',
                            visible_for: 'admin'
                            }
                        ],
                        documents: [
                            {
                            title: 'Admin Manual',
                            url: 'https://example.com/manual/admin'
                            },
                            {
                            title: 'FAQ',
                            url: 'https://example.com/faq'
                            }
                        ],
                        languages: [],
                        provisioning_message: 'Please wait while your request is being fulfilled.'
                        },
                        version: 3,
                        category: {
                        id: 'CAT-72963',
                        name: 'Security'
                        },
                        owner: {
                        id: 'VA-322-392',
                        name: 'FF Test Vendor 1'
                        },
                        latest: true,
                        stats: {
                        contracts: {
                            distribution: 0,
                            sourcing: 0
                        },
                        listings: 1,
                        agreements: {
                            distribution: 1,
                            sourcing: 0
                        }
                        },
                        media: {
                        position: 1,
                        id: 'PRM-350-146-687-32990',
                        type: 'image',
                        thumbnail: '/media/VA-322-392/PRD-350-146-687/media/media.png',
                        url: '/media/VA-322-392/PRD-350-146-687/media/media.png'
                        },
                        usage_rule: {
                        enabled: true
                        }
                    }        
                ]);
        const client = new ConnectClient('https://localhost', '1234567890');
        const response = await client.products.list();        
        response.data.should.be.an.Array();
        response.data.should.have.size(1);
        response.data[0].should.have.property('id').eql('PRD-000-000-000');
        response.data[0].should.have.property('name').eql('Product');
    });
});