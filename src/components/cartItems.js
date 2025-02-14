
import { useContext } from 'react';
import styles from '../styles/cartItems.module.css';
import Image from 'next/image';
import { CartContext } from '@/context/cartContext';


export default function CartItem({product}) {
    const {updateCartItem} = useContext(CartContext)
  
    return <div className={styles.productCard}>
       
       <div className={styles.titleSection}>
       <Image 
        src={product.image}
        width={60}
        height={60}
        alt={product.title}
        />
          <p>{product.title}</p>
       </div>
        
       
         <div className={styles.cardAction}>
            <div className={styles.quantitySection}>
                <button onClick={() => updateCartItem(product._id, -1)}>-</button>
                <button>{product.quantity}</button>
                <button onClick={() => updateCartItem(product._id, 1)}>+</button>
            </div>
            <button onClick={() => updateCartItem(product._id, -product.quantity)}>Remove</button>
         </div>
         
            <h4>${parseFloat(product.price * product.quantity).toFixed(2)}</h4>
        
      
    </div>
   
}