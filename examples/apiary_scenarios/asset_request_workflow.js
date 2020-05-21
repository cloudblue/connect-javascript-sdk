/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2020. Ingram Micro. All Rights Reserved.
 */
const { ConnectClient, Fulfillment } = require('@cloudblueconnect/connect-javascript-sdk');
const fetch = require('node-fetch');

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
  'https://api.connect.cloudblue.com/public/v1',
  'ApiKey SU-000-000-000:0000000000000000000000000000000000000000',
);
const urlBase = 'https://SET_YOUR_OWN_SAMPLE.apiary-mock.com/';

/**
 * Create tenant into Vendor System
 *
 * @param   {object}  element  The request of Cloudblue Connect.
 *
 */
function createTenant(element) {
  let mpn;
  let quantity;
  Object.values(element).some((detail) => {
    if (detail.items && detail.items.length > 0) {
      mpn = detail.items[0].mpn;
      quantity = detail.items[0].quantity;
      return true;
    }
    return false;
  });

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
  fetch(`${urlBase}/tenant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-cache',
  })
    .then((response) => response.json())
    .then((data) => console.log('data = ', data))
    .catch((err) => console.error(err));
}

/**
 * Check if the request exist into Vendor Portal
 *
 * @param   {object}  requests  The request of Cloudblue Connect.
 *
 */
function checkTenant(requests) {
  requests.forEach((element) => {
    // Verificamos si existe el tennant
    const urlGet = `${urlBase}/tenant?externalId=${element.asset.id}`;
    fetch(urlGet)
      .then((res) => res.json())
      .then((json) => {
        if (json.externalId !== element.asset.id) {
          console.log(element);
          createTenant(element);
        } else {
          throw Error('This Tenant exist in vendor');
        }
      });
  });
}

const fulfillment = new Fulfillment(client);
const getRequests = async () => {
  const requests = await fulfillment.searchRequests();
  return requests;
};

getRequests()
  .then((requests) => checkTenant(requests))
  .catch((e) => console.log(e));
