const express = require("express");

const app = express();

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
