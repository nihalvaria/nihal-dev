import React, { useEffect, useRef } from "react";
import "./ThreeBG.scss";
import { ThreeScript } from "./ThreeScript/ThreeScript";

function ThreeBG() {
    const canvas = useRef(null);

    useEffect(() => {
        ThreeScript(canvas)
    });

    return <canvas ref={canvas} id="bg" className="ThreeBG w-100 h-100"></canvas>;
}

export default ThreeBG;
