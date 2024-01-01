const express = require("express");
const { User } = require("./model/model");
const router = express.Router();

 
router.post("/login", async(req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({username})

  if (user.username === username && user.password === password) {
    return res.status(200).send("login succes");
  } else {
    res.status(400).send("login fail");
  }
});

module.exports = router;
