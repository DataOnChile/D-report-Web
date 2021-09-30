const axios = require("axios");
const config = require("../../config/config");

async function getListBusinessLines(req, res) {
  try {
    const obj = JSON.parse(req.params.obj);

    const response = await axios.post(`${config.api}lislinea.json`, obj, {
      headers: {
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${req.session.tokenAdmin}`,
      },
    });
    console.log(req.session.tokenAdmin);

    const status = response.status;
    const data = response.data;
    return res.status(status).send(data);
  } catch (err) {
    return res
      .status(401)
      .send({ message: "Problem controllers getListBusinessLines", err });
  }
}

module.exports = {
  getListBusinessLines,
};
