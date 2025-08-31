const http = require("http");
const express = require("express");
const config = require("../config");
const initSocket = require("./lib/socket");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors({ origin: "https://stunning-pegasus-8c90f6.netlify.app" }));
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://stunning-pegasus-8c90f6.netlify.app",
    methods: ["GET", "POST"],
  },
  path: "/bridge", // ✅ consistent path
});

// Initialize socket handlers
io.on("connection", initSocket);

app.use("/", express.static(`${__dirname}/../client/dist`));

server.listen(config.PORT, () => {
  // socket(server);
  console.log("Server is listening at :", config.PORT);
});
