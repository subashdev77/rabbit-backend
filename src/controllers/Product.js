const Product = require("../models/Products");

exports.createProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      descountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
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
      description,
      price,
      descountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
      user: req.user._id,
    });

    const newProduct = await product.save();
    res
      .status(201)
      .json({ message: "Product Created Successfully", data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product.", error });
  }
};

exports.updateProducts = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      descountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      sku,
    } = req.body;
  } catch (error) {}
};
