import { useRef } from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignupForm() {

    const router = useRouter();
    
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting...');
        const formData = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        fetch('/api/signup',{
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
            console.log('Signup successful');
            router.push('/auth/login');       
            
        })
    }
 
    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit} >
            <h3>Create account</h3>
            <input type="text" name="userName" id="userName" placeholder="Name" required ref={name}/>
            <input type='email' name='email' id='email' placeholder='Email Address' required ref={email}/>
            <input type='password' name='password' id='password' placeholder='Password' required ref={password} minLength={5}/>
            <button >Create Account</button>
            <p>Already have an account? <Link href='/auth/login'>Log in</Link></p>
        </form>
    </div>   
}