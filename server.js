const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("DevBank Backend Running");
});

app.get("/api/time", (req, res) => {
  res.json({
    message: "Hello, the time at the server is now " + new Date().toUTCString()
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
