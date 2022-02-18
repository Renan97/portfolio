const express = require("express");
const session = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();

const app = express();
app.use(
  session({
    secret: process.env.SESSION_KEY,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

//Middleware
app.use(express.json()); // bodyparser json
app.use(express.urlencoded({ extended: false })); //bodyparser forms

//API routing
app.use("/api/users", require("./routes/users"));
app.use("/api/login", require("./routes/login"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Running on port: " + PORT));
