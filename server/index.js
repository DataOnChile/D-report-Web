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
// ROUTERS LISTAS
const businessLines = require("./routes/home/index");
const listPendingAssigments = require("./routes/home/index");
const listToAuthorizeAssigments = require("./routes/home/index");
const listFinalizedAssigments = require("./routes/home/index");

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

// LOGIN
api.use("/api/login", login.login);

// LISTAS
api.use("/api/listBussinesLines", businessLines.listBusinessLines);
api.use(
  "/api/listPendingAssigments",
  listPendingAssigments.listPendingAssigmentsRoute
);
api.use(
  "/api/listToAuthorize",
  listToAuthorizeAssigments.listToAuthorizeAssigmentsRoute
);
api.use(
  "/api/listFinalizedAssigments",
  listFinalizedAssigments.listFinalizedAssigmentsRoute
);

api.use("/", routes);
// Server
let server = api.listen(process.env.PORT || config.port, () =>
  console.log(
    `server de paupi ☆*:. o(≧▽≦)o .:*☆ en  ${process.env.PORT || config.port}`
  )
);

server.timeout = 3000000;
