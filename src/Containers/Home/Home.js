import React, { useEffect, useContext } from "react";
import { Context } from "../../Context/Context"
import Intro from "../Intro/Intro.js"
import About from "../About/About.js"
import "./Home.scss";

const Home = props => {

    const { setNavState } = useContext(Context)

    useEffect(() => {
        setNavState("Home")
    });

    return (
        <div id="Home" className="Home position-relative flex flex-column w-100">
            <Intro />
            <About />
        </div>
    );
}

export default Home;
