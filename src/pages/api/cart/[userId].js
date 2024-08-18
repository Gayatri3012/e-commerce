import Cart from "@/models/cart";
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
    
    const client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    const db = client.db('e-commerce');

    const users = db.collection('users');
    const {userId} = req.query;

    if(req.method === 'GET'){
        console.log('inget cart backend')
        try{
        const cart = await Cart.findOne({user: userId}).exec();
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
            let cart = await Cart.findOne({ user: userId });
            console.log(cart)
            if (cart) {
                cart.items = items;
            } else {
                cart = new Cart({ user: userId, items });
            }
            
            await cart.save();
            console.log(cart.items)
            res.status(200).json(cart.items);
        } catch (error) {
            res.status(500).json({ error: 'Error updating cart' });
        }
    }
}