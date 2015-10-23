"use strict";

function NotFoundError(code, error) {
    Error.call(this, typeof error === "undefined" ? undefined : error.message);
    Error.captureStackTrace(this, this.constructor);
    this.status = "error";
    this.code = typeof code === "undefined" ? "404" : code;
    this.message = typeof error === "undefined" ? "not found" : error.message;
    this.message = error;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;
