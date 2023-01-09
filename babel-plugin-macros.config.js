const path = require("path");

module.exports = {
  twin: {
    config: path.resolve("./tailwind.config.js"),
    preset: "styled-components",
  },
};
