const express = require("express");
require("dotenv").config({ path: "./.env" });
const { Router } = require("express");
const router = new Router();
const stream = require("getstream");
// const StreamChat = require("stream-chat").StreamChat;
const key = "gzes58qjwyyt";
const secret =
  "wwx4b7ys5n87xfuqgyqn57uc5y7p5qjqzquxn9j9aw7bu3dbxnvua5xk98z5nnx8";
APP_ID = 1202347;
// console.log("app key", key);
const serverClient = stream.connect(key, secret, APP_ID);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const global = client.feed("global", "all");

  const request = await global.removeActivity(id);
  console.log(request);

  res.send(request);
});

module.exports = router;
