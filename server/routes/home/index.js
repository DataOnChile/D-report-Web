const express = require("express");

const userListCtrl = require("../../controllers/home/userList");

const userList = express.Router();

userList.get(
  // "/:obj",
  userListCtrl.getUserList
);

module.exports = { userList };
