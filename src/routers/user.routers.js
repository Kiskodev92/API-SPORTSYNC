const {Router} = require("express");
const router = Router();
const userCtrl = require ("../controller/user.controller");

router.post("/register", userCtrl.postRegister);
router.post("/registerDeporte", userCtrl.postDeporte);
router.post("/login", userCtrl.postLogin);
router.put("/usuario", userCtrl.putUsuario);
router.get("/perfil", userCtrl.getproyect);
router.post("/perfil2", userCtrl.postProyect);
router.get("/perfil4" , userCtrl.getSeguidos)





module.exports = router;