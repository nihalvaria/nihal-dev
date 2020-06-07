import React, { useEffect, useRef } from "react";
import "./ThreeBG.scss";
import { ThreeScript } from "./ThreeScript/ThreeScript";

function ThreeBG() {
    const canvas = useRef(null);

    useEffect(() => {
        ThreeScript(canvas.current);
    });

    return <canvas ref={canvas} id="c" className="ThreeBG h-100 w-100"></canvas>
}

export default ThreeBG;
