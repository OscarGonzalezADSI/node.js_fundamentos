const { Router } = require("express");
const ProductosController = require("../controllers/productos.controllers");
const router = Router();

router.get("/", ProductosController.index);
router.get("/saludo", ProductosController.saludo);
router.get("/despedida", ProductosController.despedida);

module.exports = router;
