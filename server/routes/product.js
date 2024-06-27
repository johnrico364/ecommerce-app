const express = require("express");
const Controllers = require("../controllers/productController");

const router = express.Router();

router.post("/create", Controllers.createProduct); //admin
router.get("/getall", Controllers.getProduct); // user/admin
router.get("/get/:id", Controllers.getOneProduct); // user/admin
router.patch("/update/:id", Controllers.updateProduct); // admin
router.patch("/delete/:id", Controllers.deleteProduct); // admin

router.delete("/data-reset", Controllers.dataResetProduct); // admin

module.exports = router;
