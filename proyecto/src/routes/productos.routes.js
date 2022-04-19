const { Router } = require("express");
const ProductosController = require("../controllers/productos.controllers");
const router = Router();

router.get("/", ProductosController.index);
router.get("/saludo", ProductosController.saludo);
router.get("/despedida", ProductosController.despedida);
router.get("/create", ProductosController.create);
router.get("/update", ProductosController.update);
router.get("/delete", ProductosController.delete);

module.exports = router;
  