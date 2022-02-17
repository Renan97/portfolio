const express = require("express");
const moment = require("moment");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const saltRounds = 10;
const router = express.Router();
const prisma = new PrismaClient();

//get user by username or email and check credentials
router.post("/", async (req, res) => {
  try {
    let emailOrUsername = req.body.email || req.body.username;
    let password = req.body.password;
    const users = await prisma.users
      .findFirst({
        select: {
          email: true,
          username: true,
          password: true,
        },
        where: {
          OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
        },
      })
      .then((user) => {
        if (!user) return res.status(404).json({ message: "User not found." });
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            return res.json({ username: user.username, email: user.email });
          } else {
            return res.status(500).json({ message: "Invalid credentials" });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: "An error has occour" });
  }
});

//
router.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "An error has occour" });
  }
});

module.exports = router;
