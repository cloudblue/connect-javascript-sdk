/*
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/* eslint-disable max-classes-per-file */

/**
 * HttpError wraps any http response which status is != 2xx.
 *
 * @extends Error
 * @category Base
 */
class HttpError extends Error {
  /**
   * Create a new instance of the HttpError class.
   *
   * @param {number} status the http status code.
   * @param {string} message an error message.
   */
  constructor(status, message) {
    super(message);
    /**
     * The http status code.
     *
     * @type {number}
     */
    this.status = status;
  }
}

/**
 * APIError wraps CloudBlue Connect API errors.
 * Provides convenient methods to obtains error
 * code and error messages.
 * The Cloud Blue Connect JSON error looks like:
 *
 * @example
 * {
 *    "error_code": "SYS_001",
 *    "errors": [
 *       "error message 1"
 *    ]
 * }
 *
 * @extends HttpError
 * @category Resources
 */
class APIError extends HttpError {
  /**
   * Create a new instance of the APIError class.
   *
   * @category Base
   * @param {number} status the http status code.
   * @param {string} message A JSON parseable object.
   */
  constructor(status, message) {
    super(status, message);
    this._json = JSON.parse(message);
  }

  /**
   * Returns the JSON error object.
   *
   * @returns  {object}  The error object.
   */
  get json() {
    return this._json;
  }

  /**
   * Returns the error code.
   *
   * @returns  {string}  The error code.
   */
  get errorCode() {
    return this._json.error_code;
  }

  /**
   * Returns an array of error messages.
   *
   * @returns  {Array}  The error messages.
   */
  get errors() {
    return this._json.errors;
  }
}
module.exports = { APIError, HttpError };
