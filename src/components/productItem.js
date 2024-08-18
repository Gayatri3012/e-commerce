import { useContext, useEffect } from 'react';
import styles from '../styles/products.module.css';
import Image from 'next/image';
import { CartContext } from '@/context/cartContext';

export default function ProductItem({product, showFeedback}) {
    const {items, addItemToCart} = useContext(CartContext)
    let userId;
    useEffect(() => {
        userId = sessionStorage.getItem('userId');
    },[])
   
    function handleAddToCart () {
        addItemToCart(product._id, userId);
        showFeedback();

    }
    
    return <div className={styles.productCard}>
       
        <Image 
        src={product.image}
        width={300}
        height={300}
        alt={product.title}
        />
         <h2>{product.title}</h2>
        <div className={styles.price}>
            <h4 className={styles.oldPrice}>${parseFloat(product.oldPrice).toFixed(2)}</h4>
            <h4>${parseFloat(product.price).toFixed(2)}</h4>
        </div>
      
        <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
   
}