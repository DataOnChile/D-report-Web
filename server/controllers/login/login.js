const axios = require("axios");
const config = require("../../config/config");

async function postLogin(req, res) {
  try {
    const response = await axios.post(
      `${config.api}authsupervisor.json`,
      req.body,
      {
        headers: {
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );
    const status = response.status;
    const data = response.data;

    req.session.tokenAdmin = data.auth_token;
    console.log(data);

    return res.status(status).send(data);
  } catch (err) {
    console.log("error en login", err);
    return res.status(401).send({ message: "error controller login", err });
  }
}

module.exports = {
  postLogin,
};
