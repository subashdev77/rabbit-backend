const express = require("express");
const product = require("../controllers/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/products", protect, product.createProducts);

module.exports = router;
