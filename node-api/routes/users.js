const express = require("express");
const moment = require("moment");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const saltRounds = 10;
const router = express.Router();
const prisma = new PrismaClient();

//get all users if id is not specified
router.get("/", async (req, res) => {
  try {
    const users = await prisma.users
      .findMany({
        select: {
          email: true,
          username: true,
        },
      })
      .then((a) => {
        return a;
      })
      .catch((err) => {
        console.log(err);
      });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "An error has occour" });
  }
});

//create user
router.post("/", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      let data = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
        createdAt: moment().format(),
      };

      const newUser = await prisma.users
        .create({
          data,
        })
        .then((a) => {
          return res.json({ test: "work" });
        })
        .catch((err) => {
          if (err.code === "P2002")
            return res.status(500).json({
              message: `${err.meta.target[0]} already exists.`,
            });
          console.log(err);
        });
    });
  } catch (err) {
    res.status(500).json({ message: "An error has occour" });
  }
});

module.exports = router;
