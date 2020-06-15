import React, { useEffect, useRef } from "react";
import "./ThreeBG.scss";
import { ThreeScript } from "./ThreeScript/ThreeScript";

function ThreeBG() {
    const canvas = useRef(null);

    useEffect(() => {
        ThreeScript(canvas.current)
    });

    return <div ref={canvas} className="ThreeBG position-absolute w-100 h-100"></div>;
}

export default ThreeBG;
