import { useNavigate } from 'react-router';

import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useEffect } from 'react';



const Register = ({ auth }) => {
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('register').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });
    }

    return (
    <>
        <Header />    
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className="btn" type="submit" Value="Sign up" />
                    <input className="btn" type="button" onClick={(e)=>{e.preventDefault();navigate(('/login'))}} Value="Sign in" />
                </div>
            </form>
        </section>
        <Footer />
    </>
    );
};

export const RegisterWithAuth = withAuth(Register);

