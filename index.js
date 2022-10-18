require("dotenv").config({ path: __dirname + "/.env" });

const stream = require("getstream");
const key = "gzes58qjwyyt";
const secret =
  "wwx4b7ys5n87xfuqgyqn57uc5y7p5qjqzquxn9j9aw7bu3dbxnvua5xk98z5nnx8";

const serverClient = stream.connect(key, secret);
const express = require("express");
const corsMiddleWare = require("cors");

const app = express();

app.use(express.json());
app.use(corsMiddleWare());

const PORT = 4000;

const tokenRouter = require("./Routes/tokenRouter");
const updateRouter = require("./Routes/updateRouter");
const globalRouter = require("./Routes/globalRouter");
// const createChannelRouter = require("./routers/createChannelRoute");

app.use("/token", tokenRouter);
app.use("/update", updateRouter);
app.use("/global", globalRouter);
// app.use("/channel", createChannelRouter)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
