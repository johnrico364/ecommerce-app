const express = require("express");
const Controllers = require("../controllers/orderControllers");

const router = express.Router();

router.post("/new-order", Controllers.orderProduct);
router.get("/cart/:ordered_by", Controllers.getAllCart);
router.delete("/cancel-order/:id", Controllers.cancelOrder);

module.exports = router;
