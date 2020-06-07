import React, { useState, useRef, useEffect } from "react";
import "./Home.scss";

function Home() {

    const [displayState, setDisplayState] = useState("")
    const headerText = useRef(null)

    useEffect(() => {
    })

    return (
        <div className="Home position-relative flex h-100 w-100">
            <div className="center-con flex flex-column text-center">
                <h1 ref={headerText} className="title line-1 anim-typewriter">nihal.dev</h1>
                <h2 className="subtitile">subtitle</h2>
                <p>
                    my work
                </p>
                <p>
                    <a href="mailto:nihalsinghvaria@gmail.com">contact me</a>
                </p>
            </div>
        </div>
    );
}

export default Home;
