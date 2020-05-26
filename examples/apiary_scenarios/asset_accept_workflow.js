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
 * This module accept the Purchase Request into Connect when the tenant is ready in Vendor System.
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
let templateIdParam;

/**
 * Process Purchase Request into Cloudblue Connect
 *
 * @param   {object}  element  The request of Cloudblue Connect.
 *
 */
function processRequest(element) {
  if (element.type === 'purchase') {
    element.asset.params.forEach((param) => {
      if (param.id === 'tenantId') {
        tenantIdParam = param.value;
      }
    });
    if (tenantIdParam !== '') {
      element.asset.configuration.params.forEach((param) => {
        if (param.id === 'templateId') {
          templateIdParam = param.value;
        }
      });
      const body = {
        template_id: templateIdParam,
      };
      const approveRequests = async () => {
        const responseApprove = await fulfillment.approveRequest(element.id, body);
        return responseApprove;
      };
      approveRequests()
        .then((responseApprove) => console.log(responseApprove))
        .catch((e) => console.log(e));
    } else {
      throw Error('This Tenant not exist in vendor');
    }
  } else {
    console.log('This processor not handle this type of request');
  }
}

/**
 * Check if the request is ready into Vendor Portal
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
        if (json.status === 'ready') {
          processRequest(element);
        } else {
          throw Error('This Tenant is in process or not exist yet');
        }
      });
  });
}

const getRequests = async () => {
  const requests = await fulfillment.searchRequests();
  return requests;
};

getRequests()
  .then((requests) => checkTenant(requests))
  .catch((e) => console.log(e));
