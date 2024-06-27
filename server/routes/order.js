const express = require("express");
const Controllers = require("../controllers/orderControllers");

const router = express.Router();

router.post("/buy", Controllers.buyProducts);
router.post("/add-cart", Controllers.addCart);
router.delete("/cancel-order/:id", Controllers.cancelOrder);
