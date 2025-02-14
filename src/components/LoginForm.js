import { useEffect, useRef, useState } from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginForm() {

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter();

    const email = useRef();
    const password = useRef();    

    useEffect(() => {
        if (router.query.demo) {
            email.current.value = 'demo@ecommerce.com';
            password.current.value = 'demo123';
        }
    }, [router.query]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
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
            if(res.status === 400){
                setErrorMessage(res.message);
                setIsLoading(false)
            }
            if(res.status !== 200 && res.status !== 400){
                setIsLoading(false)
                throw new Error('Something went wrong!!!');
            }
            
            return res.json();
        }).then(resData => {
            if(resData.message === 'Please enter valid credentials.'){
                setErrorMessage('Please enter valid email.');
                password.current.value = '';
                setIsLoading(false)
            } else if(resData.message === 'Incorrect password.'){
                setErrorMessage('Incorrect password.');
                setIsLoading(false)
            } else {
                console.log(resData);
                console.log('Login successful');
                sessionStorage.setItem('userId',resData.userId);
                setIsLoading(false);
                router.push('/shop');  
            }
              
        }).catch((error) => {
            console.error('Login error:', error); 
        });
    }

    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleLogin}>
            <h3>Welcome Back!</h3>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input className={errorMessage === 'Please enter valid credentials.' ? styles.errorField : undefined} type='email' name='email' id='email' placeholder='Email Address' ref={email} required/>
            <input className={errorMessage === 'Incorrect password.' ? styles.errorField : undefined} type='password' name='password' id='password' placeholder='Password' ref={password} required/>
            <button >{ isLoading ? <img className={styles.loadingGIF} src="/loading.gif" alt="loading..." /> : "Log In"}</button>
            <p>Don&apos;t have an account? <Link href='/auth/'>Sign Up</Link></p>
        </form>
    </div>   
}