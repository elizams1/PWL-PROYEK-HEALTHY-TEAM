import React from "react";
import './register.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="bodysection">
            <card className="cardbody">
                <div>
                    <Link to="/" className="logo flex m-5">
                        <h1>DAFTAR</h1>
                    </Link>
                    <Form>
                        <Form.Group className="box" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="box" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="box" controlId="formBasicPassword">
                            <Form.Label>Ulangi Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="btn">Buat</Button>
                    </Form>
                </div>
            </card>
        </section>
    );
}

export default Register
