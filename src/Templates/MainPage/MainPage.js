import React from "react";
import "./MainPage.scss";
import ThreeBG from "../../Molecules/ThreeBG/ThreeBG";
import Home from "../../Organisms/Home/Home"

const MainPage = props => {
    return (
        <div className="MainPage h-100 w-100">
            <ThreeBG />
            <Home />
        </div>
    );
}

export default MainPage;