import Product from "../models/product.mjs";

const getAllProductStatic = async (req, res) => {
  const products = await product.find({});
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);

  res.json({ products, nbHits: products.length });
};

export { getAllProducts, getAllProductStatic };
