"use strict";

const express = require("express");
const socketIO = require("socket.io");

const PORT = process.env.PORT || 3000;
const INDEX = "/index.html";

const server = express()
  .use(express.static("sounds"))
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

function emitClientsCount() {
  io.emit("clientsCount", io.engine.clientsCount);
}

io.on("connection", socket => {
  emitClientsCount();
  socket.on("disconnect", emitClientsCount);

  socket.on("clap", function() {
    io.emit("clap", {
      ts: new Date(),
      socketId: socket.id
    });
  });
});
