import React, { useContext } from "react";
import { Context } from "../../Context/Context"
import "./Navbar.scss"

const Navbar = props => {
    const { navState } = useContext(Context)

    return (
        <nav className="Navbar position-absolute w-100 flex bg-dark text-white">
            <div className="curr-page">
                <p className="curr-page-text m-0">{navState}</p>
            </div>
            <div className="title">
                <p className="title-text m-0"></p>
            </div>
        </nav>
    );
};

export default Navbar;
