/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */
/* eslint-disable max-classes-per-file */
/**
 *   HttpError wraps any http response which status is != 2xx.
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
     * @type {number}
     */
    this.status = status;
  }
}
class APIError extends HttpError {
/**
 * APIError wraps any http response which status is != 2xx.
 *
 * Provides a quick and easy access to the JSON error.
 *
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
 *
 */
  constructor(status, message) {
    super(status, message);
    /**
     * The JSON error object.
     * @type {Object}
     */
    this.json = JSON.parse(message);
    /**
     * The error code returned by the server.
     * @type {string}
     */
    this.errorCode = this.json.error_code;
    /**
     * The array of error messages.
     * @type {Array}
     */
    this.errors = this.json.errors;
  }
}
module.exports = { HttpError, APIError };
