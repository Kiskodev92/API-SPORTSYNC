const {Router} = require("express");
const router = Router();
const eventCtrl = require ("../controller/event.controller");

router.post("/evento", eventCtrl.postAddEvent);


module.exports = router;