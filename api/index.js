const vercel = require("@remix-run/vercel");

module.exports = vercel.createRequestHandler({
  build: require("./_build"),
});
