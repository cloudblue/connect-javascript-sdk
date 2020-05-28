/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */
const { ConnectClient, Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');
const fetch = require('node-fetch');
const config = require('./config.json');

/* eslint-disable no-console */

/**
 * This module is an example of fulfillment flow between
 * Cloudblue Connect and Vendor System.
 * This connect with the Vendor System using an
 * example of API Vendor System implemented in apiary.io
 * and documented in the Cloudblue Connect Documentation Portal:
 * https://connect.cloudblue.com/community/sdk/vendor-scenario-example/fulfillment/
 *
 * This module creates a tenant in the Vendor System when is created in Cloudblue Connect.
 *
 * @category Operations
 */
const client = new ConnectClient(
  config.url,
  config.apiKey,
);
const fulfillment = new Fulfillment(client);
const urlBase = 'https://SET_YOUR_OWN_SAMPLE.apiary-mock.com/';

let tenantIdParam;

/**
 * Create tenant into Vendor System
 *
 * @param   {object}  element  The request of Cloudblue Connect.
 *
 */
const createTenant = async (element) => {
  let mpn;
  let quantity;
  if (element.asset.items && (element.asset.items.length === 1)) {
    element.asset.items.forEach((item) => {
      mpn = item.mpn;
      quantity = item.quantity;
    });
  } else {
    throw new Error('Malformed request, bad quantity of item');
  }
  const payload = {
    Attributes: {
      product: { mpn, quantity },
      account: {
        accountFirstName: element.asset.tiers.customer.contact_info.contact.first_name,
        accountLastName: element.asset.tiers.customer.contact_info.contact.last_name,
        accountCompany: element.asset.tiers.customer.name,
        accountAddress: element.asset.tiers.customer.contact_info.address_line1,
        accountCity: element.asset.tiers.customer.contact_info.city,
        accountState: element.asset.tiers.customer.contact_info.state,
        accountPostalCode: element.asset.tiers.customer.contact_info.postal_code,
        accountCountry: element.asset.tiers.customer.contact_info.country,
        accountEmail: element.asset.tiers.customer.contact_info.contact.email,
        accountPhone: element.asset.tiers.customer.contact_info.contact.phone_number.phone_number,
      },
    },
  };
  let data = await fetch(`${urlBase}/tenant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-cache',
  });
  data = await data.json();
  element.asset.params.forEach(async (param) => {
    if (param.id === 'tenantId') {
      const requests = await fulfillment.updateRequestParameters(element.id, [{ id: 'tenantId', value: data.tenantId }], 'Id of vendor system tenant');
      console.log(requests);
    }
  });
};


/**
 * Check if the request exist into Vendor Portal
 *
 * @param   {object}  requests  The request of Cloudblue Connect.
 *
 */
const checkTenant = async (requests) => {
  requests.forEach(async (element) => {
    if (element.type === 'purchase') {
      element.asset.params.forEach((param) => {
        console.log('param.id', param.id);
        if (param.id === 'tenantId') {
          tenantIdParam = param.value;
        }
      });
      if (tenantIdParam === '') {
        console.log(element);
        await createTenant(element);
      } else {
        throw new Error('This Tenant exist in vendor');
      }
    } else {
      console.log('This processor not handle this type of request');
    }
  });
};


const main = async () => {
  const requests = await fulfillment.searchRequests();
  await checkTenant(requests);
};


main().catch((e) => console.log(e));
