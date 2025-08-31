const http = require("http");
const express = require("express");
const config = require("../config");
const socket = require("./lib/socket");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // or "https://your-frontend.netlify.app"
    methods: ["GET", "POST"],
  },
});

app.use("/", express.static(`${__dirname}/../client/dist`));

server.listen(config.PORT, () => {
  socket(server);
  console.log("Server is listening at :", config.PORT);
});
