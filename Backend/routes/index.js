const router = require("express").Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const isAuth = require("./authMiddleware").isAuth;

// const isAdmin = require("./authMiddleware").isAdmin;

router.use(bodyParser.urlencoded({ extended: false }));
/**
 * -------------- GET ROUTES ----------------
 *
 */
router.get("/", isAuth);
router.get("/user", isAuth);

/**
 * -------------- GET ROUTES ----------------
 *
 */

router.get("/logout", (req, res) => {
  req.logout();

  res.sendStatus(200);
});

router.get("/visitor", (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});
router.post(
  "/login",

  passport.authenticate("local"),
  (req, res) => {
    res.sendStatus(200);
  }
);

router.post("/register", (req, res) => {
  const saltHash = genPassword(req.body.pass2);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.email,
    firstName: req.body.first,
    lastName: req.body.last,
    url: req.body.url,
    hash: hash,
    salt: salt,
    admin: true,
  });

  newUser.save().then((user) => {});
  res.sendStatus(200);
});
module.exports = router;
