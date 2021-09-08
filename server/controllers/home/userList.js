const axios = require("axios");
const config = require("../../config/config");

async function getUserList(req, res) {
  try {
    const obj = JSON.parse(req.params.obj);
    // CUANDO CONECTEMOS LAS APIS REALES CAMBIALAS A POST XQ MAX PONE TODO EN POST ${config.api}liemdelusr.json

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`,
      // obj,
      {
        headers: {
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
          // Authorization: `Bearer ${req.session.tokenAdmin}`,
        },
      }
    );

    const status = response.status;
    const data = response.data;
    return res.status(status).send(data);
  } catch (err) {
    return res
      .status(401)
      .send({ message: "Problem controllers userList", err });
  }
}

module.exports = {
  getUserList,
};
