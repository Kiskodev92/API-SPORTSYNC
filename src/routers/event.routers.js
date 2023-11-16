const {Router} = require("express");
const router = Router();
const eventCtrl = require ("../controller/event.controller");

router.post("/evento", eventCtrl.postAddEvent);
router.get("/home", eventCtrl.getEvent)
router.get("/explore", eventCtrl.getOne)



module.exports = router;