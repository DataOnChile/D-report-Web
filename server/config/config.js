require("dotenv").config();

const config = {
  api: `http://${process.env.API}:${process.env.API_PORT}/`,
  port: process.env.PORT,
};
 module.exports = config;
