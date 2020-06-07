import React from "react";
import "./MainPage.scss";
import ThreeBG from "../../Molecules/ThreeBG/ThreeBG";
import Home from "../../Organisms/Home/Home"

function MainPage() {
    return (
        <div className="MainPage h-100 w-100">
            <Home />
            <ThreeBG />
        </div>
    );
}

export default MainPage;