import React from "react";
import { BsEggFried } from "react-icons/bs";
import './login.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const handleGooglelogin = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                console.info(result.user)
            })
            .catch((err) => {
                console.info(err)
            })
    }


    return (
        <section className="bodysection">
            <card className="cardbody">
                <div>
                    <Link to="/" className="logo flex m-5">
                        <h1>
                            KAL
                            <BsEggFried className="icon" />
                            RIIN
                        </h1>
                    </Link>
                    <Form>
                        <Form.Group className="box" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="box" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                Belum Punya Akun!
                                <Link to={"/register"}> Daftar </Link>
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn mb-5">Masuk</Button>
                        
                    </Form>
                </div>
            </card>
        </section>
    );
}

export default Login
