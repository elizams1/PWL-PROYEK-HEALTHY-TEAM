import React from "react";
import "./navbar.css";
import { BsEggFried } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <div href="#" className="logo flex">
                        <h1>
                            KAL
                            <BsEggFried className="icon" />
                            RIIN
                        </h1>
                    </div>
                </div>

                <div className="navBar">
                    <ul className="navlists flex">
                        <li className="navItem">
                            <Link to={"/"} className="navLink">
                                Beranda
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to={"/"} className="navLink">
                                Makanan
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to={"/"} className="navLink">
                                Pengguna
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to={"/"} className="navLink">
                                Profile
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to={"/login"} className="navLink">
                                <CgProfile className="profil" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    );
};

export default Navbar;
