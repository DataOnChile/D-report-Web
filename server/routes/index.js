const express = require("express");
const path = require("path");

const router = express.Router();

/* Utilizamos esta ruta para conectar el build del cliente con el back - esto se utiliza para el modo producción */
router.get("/*", function (res) {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

module.exports = router;