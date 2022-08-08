import { useContext,useEffect } from "react";
import { useNavigate } from "react-router";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('login').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
    <>
        <Header />
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className="btn" value="Sign in" />
                    <input type="button" onClick={(e)=>{e.preventDefault();navigate(('/register'))}} className="btn" value="Sign up" />
                </div>
            </form>
        </section>
        <Footer />
    </>
    );
}
