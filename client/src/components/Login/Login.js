import React, { useContext, useState } from "react";
import axios from "axios";

// import classes from './Login.module.css';
import AuthContext from '../../store/auth-context';
import Modal from "../UI/Modal";

const Login = (props) => {
    const ctx = useContext(AuthContext);

    const [hasAccount, setHasAccount] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameChangeHandler = (event) => { setName(event.target.value); }

    const emailChangeHandler = (event) => { setEmail(event.target.value); }

    const passwordChangeHandler = (event) => { setPassword(event.target.value); }

    const switchHasAccountHandler = (event => {
        setHasAccount((prevState) => { 
            return !prevState; 
        });
    });

    const closeHandle = () => {
        ctx.changeInLoginPage();
    }

    const LoginHandler = async (event) => {
        event.preventDefault();

        ctx.changeInLoginPage();

        let user = {
            email: email, 
            password: password
        };

        if (!ctx.isSigningIn) {
            user = {
                ...user, 
                name: name
            }
        } 

        await axios.post(`http://localhost:5000/${hasAccount ? 'signin' : 'signup'}`, user)
        .then((data) => {
            ctx.onLogin(data.data.id);
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response.data.error)
        });
        
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Modal onClose={closeHandle}>
            {<h3>{hasAccount ? 'Sign In' : 'Sign Up'}</h3>}
            <form onSubmit={LoginHandler}>
                <button type="button" onClick={closeHandle}>X</button>
                {!hasAccount && 
                <input
                    value={name} 
                    type="text" 
                    id="name"
                    placeholder="Name"
                    onChange={nameChangeHandler}
                />}
                <input
                    value={email} 
                    type="text" 
                    id="email"
                    placeholder="Email"
                    onChange={emailChangeHandler}
                />
                <input 
                    value={password}
                    type="password" 
                    id="pass" 
                    placeholder="Password"
                    onChange={passwordChangeHandler}
                />
                <button type="submit">{hasAccount ? 'Sign in' : 'Sign up'}</button>
            </form>
            {hasAccount ? 
            <p>
                Don't have an account? <button onClick={switchHasAccountHandler}>Sign up</button>
            </p>
            :
            <p>
                Already have an account? <button onClick={switchHasAccountHandler}>Sign in</button>
            </p>}
        </Modal>    
    );
}

export default Login;