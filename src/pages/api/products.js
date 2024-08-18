import { MongoClient } from "mongodb";
import Product from "@/models/product";

export default async function handler(req, res) {
  
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('e-commerce');

    const products = db.collection('products');
    const productItems = await Product.find();
    try{
      res.status(200).json({items: productItems});
    } catch(err){
      console.error(err);

    }
    client.close();
}
