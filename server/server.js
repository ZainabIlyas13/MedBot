import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./config/db.js";

import Routes from "./api/routes/index.js";

// import Routes from "./api/routes/auth/index.js";

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);
