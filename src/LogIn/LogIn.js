import React, { useState } from 'react'
import "./LogIn.css"
import { Link, useNavigate } from "react-router-dom";
import StoreIcon from '@mui/icons-material/Store';
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // Usuario creado
                const user = auth.user;                
                alert("Usuario creado:", user);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className='login'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo">
                    <StoreIcon className='icon' fontSize='large' />
                    <h2>eShop</h2>
                </div>
            </Link>

            <div className="container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>By signing in you agree to the eShop Website Conditions of use & sale. Please see
                    our Privacy Notice, our Cookies Notice and our Interest  Based ads
                </p>

                <button className='create' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default LogIn