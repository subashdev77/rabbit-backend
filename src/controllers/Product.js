const Product = require("../models/Products");

exports.createProducts = async (req, res) => {
  try {
    const {
      name,
      descriprion,
      price,
      descountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      materials,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
    } = req.body;

    const product = new Product({
      name,
      descriprion,
      price,
      descountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      materials,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
      user: req.user._id, // Reference to the admin user who created it
    });

    const newProduct = await product.save();
    res
      .status(201)
      .json({ message: "Product Crete Successfully", data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
