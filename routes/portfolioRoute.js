const express = require("express");
const { senEmailController } = require("../controllers/portFolioController");

//router object create krhy
const router = express.Router();

//routes
router.post("/send-email", senEmailController); //1st url or 2nd callback  function

//exports
module.exports = router;
