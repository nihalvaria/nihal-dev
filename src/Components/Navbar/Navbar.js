import React, { useContext } from "react";
import { Context } from "../../Context/Context"
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect";
import "./Navbar.scss"

const Navbar = props => {
    const { navState } = useContext(Context)

    return (
        <nav className="Navbar position-absolute w-100 flex justify-content-between bg-dark text-white">
            <div className="curr-page mx-4">
                <p className="curr-page-text m-0">{navState}</p>
            </div>
            <div className="title mx-4">
                <Link className="title-text m-0 text-white" href="/">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`nihal.dev`)
                                .callFunction(() => {
                                })
                                .start();
                        }}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
