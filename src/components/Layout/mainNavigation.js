import styles from '../../styles/mainNav.module.css';

export default function MainNavigation(){
    return <>
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src='/logo.png' />     
                <h1>ShopIt</h1>
            </div>
            
            <div className={styles.menu}>
                <a href='/shop'>Products</a>
                <a href='/cart'>Cart</a>
            </div>
           
        </nav>
    </>
}