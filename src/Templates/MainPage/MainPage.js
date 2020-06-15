import React, { useContext } from "react";
import "./MainPage.scss";
import ThreeBG from "../../Molecules/ThreeBG/ThreeBG";
import Home from "../../Organisms/Home/Home"
import { Context } from "../../Context/Context"

const MainPage = props => {
    const AllPages = [Home]
    const {Page} = useContext(Context)
    const Component = AllPages[Page]
    console.log(Component)
    return (
        <div className="MainPage h-100 w-100">
            <ThreeBG />
            <Home />
        </div>
    );
}

export default MainPage;