const express = require("express");
const Controllers = require("../controllers/orderControllers");

const router = express.Router();

router.post("/new-order", Controllers.orderProduct); // user order product
router.get("/cart/:ordered_by", Controllers.getUserCarts); //user carts
router.post("/checkout-cart", Controllers.checkoutCartedProducts); //user carts
router.delete("/cancel-order/:id", Controllers.cancelOrder); 
router.post("/get-by-status", Controllers.getUserOrderByStatus); //user profile

module.exports = router;
