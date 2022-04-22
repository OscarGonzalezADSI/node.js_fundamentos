const { Router } = require("express");
const ProductosController = require("../controllers/productos.controllers");
const router = Router();

// obtener todos los prodcutos
router.get("/", ProductosController.index);
// obtener un producto por el id
router.get("/:id", ProductosController.producto);
// crear un producto
router.post("/create", ProductosController.create);
// actualizar un producto por id
router.put("/update/:id", ProductosController.update);
// eliminar un producto por id
router.delete("/delete/:id", ProductosController.delete);

module.exports = router;
