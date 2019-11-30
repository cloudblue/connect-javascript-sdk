/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

/**
 * HttpError wraps any http response whose status is != 2xx.
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
    this.status = status;
  }
}

module.exports = { HttpError };
