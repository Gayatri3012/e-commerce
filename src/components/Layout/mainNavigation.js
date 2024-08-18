import { CartContext } from '@/context/cartContext';
import styles from '../../styles/mainNav.module.css';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MainNavigation(){
    const {items} = useContext(CartContext);
    const router = useRouter();

    let userName;
    useEffect(() => {
        userName = sessionStorage.getItem('userName');
    },[])
    const calculateTotalItems = () => {
        let totalItems = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            totalItems +=  item.quantity;
        }
        return totalItems;
    }

    const itemCount = calculateTotalItems();

    const handleLogout = () => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        localStorage.removeItem('cart')
        console.log('logged out successfully');
        router.push('/');
    }
    return <>
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src='/logo.png' />     
                <h1>ShopIt</h1>
            </div>
            
            <div className={styles.menu}>
                <Link href='/shop'>Products</Link>
                <Link href='/cart'>Cart { itemCount> 0 &&<span>({itemCount})</span>}</Link>
            </div>
           
           {/* <div>
                <h3>{userName}</h3>
           </div> */}
           <div className={styles.logoutButton}>
            <button onClick={handleLogout}>Logout</button>
           </div>
        </nav>
    </>
}