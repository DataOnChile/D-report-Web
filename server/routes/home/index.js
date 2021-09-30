const express = require("express");

// controles
const listBusinessLinesCtrl = require("../../controllers/home/listBusinessLines");
const listPendingAssigmentsCtrl = require("../../controllers/home/assigments/listPending");
const listToAuthorizeAssigmentsCtrl = require("../../controllers/home/assigments/listToAuthorize");
const listFinalizedAssigmentsCtrl = require("../../controllers/home/assigments/listFinalized");

// routas
const listBusinessLines = express.Router();
const listPendingAssigmentsRoute = express.Router();
const listToAuthorizeAssigmentsRoute = express.Router();
const listFinalizedAssigmentsRoute = express.Router();

listBusinessLines.get("/:obj", listBusinessLinesCtrl.getListBusinessLines);
listPendingAssigmentsRoute.get(
  "/:obj",
  listPendingAssigmentsCtrl.getListPendingAssigments
);
listToAuthorizeAssigmentsRoute.get(
  "/:obj",
  listToAuthorizeAssigmentsCtrl.getListToAuthorizeAssigments
);
listFinalizedAssigmentsRoute.get(
  "/:obj",
  listFinalizedAssigmentsCtrl.getListFinalizedAssigments
);

module.exports = {
  listBusinessLines,
  listPendingAssigmentsRoute,
  listToAuthorizeAssigmentsRoute,
  listFinalizedAssigmentsRoute,
};
