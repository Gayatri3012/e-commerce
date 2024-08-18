import { useRef } from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';

export default function LoginForm() {
    
    const router = useRouter();

    const email = useRef();
    const password = useRef();    

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('In Handle Login');
        const formData = {
            email: email.current.value,
            password: password.current.value
        }
        console.log(formData);
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res =>{
            if(res.status !== 200){
                throw new Error('Something went wrong!!!');
            }
            return res.json();
        }).then(resData => {
            console.log(resData);
            console.log('Login successful');
            sessionStorage.setItem('userId',resData.userId);
            router.push('/shop');       
        })
    }
    
    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleLogin}>
            <h3>Welcome Back!</h3>
            <input type='email' name='email' id='email' placeholder='Email Address' ref={email} required/>
            <input type='password' name='password' id='password' placeholder='Password' ref={password} required/>
            <button >Log In</button>
            <p>Don't have an account? <a href='/auth/'>Sign Up</a></p>
        </form>
    </div>   
}