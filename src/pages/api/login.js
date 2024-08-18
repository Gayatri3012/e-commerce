import { MongoClient } from "mongodb";
import bcrypt from 'bcryptjs';


export default async function handler(req, res) {
  if(req.method === 'POST'){
    const data = req.body;
    
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('e-commerce');

    const users = db.collection('users');

    try{
        const user = await users.findOne({email : data.email});
        const isEqual = await bcrypt.compare(data.password, user.password);
        if(!isEqual){
            res.status(400).json({message: 'Please enter valid credentials.'})
        }

        res.status(200).json({message: 'Login successful', userId: user._id});
    }catch(err){
        console.error(err);
    }
   
    client.close();
  }
}
