import Cart from "@/models/cart";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";


export default async function handler(req, res) {
    
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('e-commerce');

    const users = db.collection('users');
    const {userId} = req.query;
    const userObjectId = new mongoose.Types.ObjectId(userId);
    console.log(userObjectId)
    
    if(req.method === 'GET'){
        console.log('inget cart backend')
        try{
            const cart = await Cart.findOne({user: userObjectId});
            if(cart){
                console.log(cart)
                res.status(200).json({items: cart.items});
            }else {
                res.status(404).json({ error: 'Cart not found' });
            }
        
        }catch(error){
            res.status(500).json({ error: 'Error fetching cart' });
        }
    } else  if (req.method === 'POST'){
        try {
            const { items } = req.body;
            console.log('items in post',items)
            let cart = await Cart.findOne({ user: userObjectId });
            if (cart) {
                cart.items = items;
            } else {
                cart = new Cart({ user: userObjectId, items });
            }
            
            await cart.save();
            res.status(200).json(cart.items);
        } catch (error) {
            res.status(500).json({ error: 'Error updating cart' });
        }
    }
}