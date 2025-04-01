const express = require("express");
const product = require("../controllers/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/products/create", protect, admin, product.createProducts);
router.post("/products/:id", protect, admin, product.updateProducts);

module.exports = router;
