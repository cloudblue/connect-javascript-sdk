/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { APIError } = require('../../../../lib/connect/api/errors');

describe('APIError', () => {
  it('creates a new APIError', () => {
    const errObj = {
      error_code: 'code',
      errors: ['first', 'second']
    }
    const apiError = new APIError(400, JSON.stringify(errObj));
    expect(apiError.status).toEqual(400);
    expect(apiError.errorCode).toEqual(errObj.error_code);
    expect(apiError.json).toEqual(errObj);
    expect(apiError.errors).toEqual(errObj.errors);
  });
});