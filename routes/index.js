var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message:
      "Welcome to Blogging  API...! Here you can post your Blog and perform all CRUD operation",
  });
});

module.exports = router;
