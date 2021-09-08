"use strict";
const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const path = require("path");
// Routers
const routes = require("./routes/index");
const login = require("./routes/login/index");
const users = require("./routes/home/index");

const api = express();

api.set("trust proxy", 1);
api.use(express.static(path.join(__dirname, "../client/build")));
api.use(bodyParser.json({ limit: "10mb", extended: true }));
api.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
api.use(cors());
api.use(
  cookieSession({
    name: "session",
    keys: ["llave-1"],
  })
);

// Nota: primero como se llama acá y luego como se llama en la carpeta ruta
api.use("/api/login", login.login);
api.use("/api/userList", users.userList);

api.use("/", routes);
// Server
let server = api.listen(process.env.PORT || config.port, () =>
  console.log(`server de paupi en ${process.env.PORT || config.port}`)
);

server.timeout = 3000000;
