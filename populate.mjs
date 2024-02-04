import connectDB from "./db/connect.mjs";
import Product from "./models/product.mjs";
import jsonData from "./products.json" assert { type: "json" }; // u need to add the assert { type: "json" } otherwise it will not work
import "dotenv/config";
// this function saves the json data to the database and then exits the process
// if u need to run it just type  =======> "node populate.mjs"

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonData);
    console.log("Connected to the database");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
