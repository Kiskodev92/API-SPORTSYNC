const {Router} = require("express");
const router = Router();
const eventCtrl = require ("../controller/event.controller");

router.post("/evento", eventCtrl.postAddEvent);
router.get("/home", eventCtrl.getEvent);
router.get("/explore", eventCtrl.getOne);
router.get("/sport", eventCtrl.getDeporte);
router.get("/sportus", eventCtrl.getDeportUs);
router.post("/btn", eventCtrl.postBoton);




module.exports = router;