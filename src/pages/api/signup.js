import { MongoClient } from "mongodb";
import bcrypt from 'bcryptjs';
import User from "@/models/user";

export default async function handler(req, res) {
  console.log('in signup handler')
  if(req.method === 'POST'){
    const data = req.body;
    console.log(data)

    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('e-commerce');

    const users = db.collection('users');
    try{
      
      const hashedPw = await bcrypt.hash(data.password, 12);
      const user = new User({
        name: data.name,
        email: data.email,
        password: hashedPw,
        cart: []
      });
      const result = await users.insertOne(user);
      console.log(result.id)
      console.log(result)
      res.status(200).json({ message: 'User created!'});
    } catch(err){
      console.error(err);

    }
   
    client.close();
  }
}
