const express = require("express");
const product = require("../controllers/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/products/best-seller", product.getBestSeller);
router.get("/products/new-arrivals", product.getNewArrivals);
router.post("/products/create", protect, admin, product.createProducts);
router.post("/products/:id", protect, admin, product.updateProducts);
router.delete("/products/:id", protect, admin, product.deleteProducts);
router.get("/products/:id", product.getProductById);
router.get("/products", product.getAllProducts);
router.get("/products/similar/:id", product.getSimilarProductsById);

module.exports = router;
