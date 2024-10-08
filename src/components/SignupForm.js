import { useRef , useState} from 'react';
import styles from '../styles/auth.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function SignupForm() {

    const [errorMessage, setErrorMessage] = useState(null);
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
            if(res.status === 400){
                setErrorMessage(res.message);
                // throw new Error('Email already exists!!!');
            }
            if(res.status !== 200 && res.status !== 400){
                throw new Error('Something went wrong!!!');
            }
            return res.json();
        }).then(resData => {
            console.log(resData);
            if(resData.message === 'Email already exists.'){
                setErrorMessage('Email already exists.')
                password.current.value = '';
              
                return;
            }else {
               console.log('Signup successful');
                router.push('/auth/login');   
            }
                 
            
        }).catch((error) => {
            console.error('Signup error:', error); 
        });
    }
 
    return <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit} >
            <h3>Create account</h3>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input type="text" name="userName" id="userName" placeholder="Name" required ref={name}/>
            <input className={errorMessage ? styles.errorField : undefined} type='email' name='email' id='email' placeholder='Email Address' required ref={email}/>
            
            <input type='password' name='password' id='password' placeholder='Password' required ref={password} minLength={5}/>
            <button >Create Account</button>
            <p>Already have an account? <Link href='/auth/login'>Log in</Link></p>
        </form>
    </div>   
}