const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.port || 3000;

const pacients = require("./src/routes/pacientsRouter.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pacients", pacients);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
