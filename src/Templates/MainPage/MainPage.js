import React, { useContext } from "react";
import "./MainPage.scss";
import ThreeBG from "../../Molecules/ThreeBG/ThreeBG";
import Home from "../../Organisms/Home/Home"
import { PageContext } from "../../Context/PageContext"

const AllPages = [Home]

const MainPage = props => {
    const { Component } = useContext(PageContext)

    return (
        <div className="MainPage h-100 w-100">
            <ThreeBG />
            <Component />
        </div>
    );
}

export default MainPage;