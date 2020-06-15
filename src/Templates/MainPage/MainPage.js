import React, { useContext } from "react";
import "./MainPage.scss";
import ThreeBG from "../../Molecules/ThreeBG/ThreeBG";
import Home from "../../Organisms/Home/Home"
import { Switch, Route } from "react-router-dom";

const MainPage = props => {

    return (
        <div className="MainPage h-100 w-100">
            <ThreeBG />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
            </Switch>
        </div>
    );
}

export default MainPage;