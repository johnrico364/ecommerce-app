const express = require("express");
const Controllers = require("../controllers/orderControllers");

const router = express.Router();

router.post("/new-order", Controllers.orderProduct);
router.delete("/cancel-order/:id", Controllers.cancelOrder);

module.exports = router;
