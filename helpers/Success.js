"use strict";

function Success(data) {
  this.status = "success";
  this.code = 200;
  this.payload = data;
}

module.exports = Success;
