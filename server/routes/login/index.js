const express = require("express");
// importa ctrl
const loginCtrl = require("../../controllers/login/login");
// creando ruta
const login = express.Router();

login.post("/", loginCtrl.postLogin);

module.exports = { login };