import React from "react";
import ThreeBG from "./Components/ThreeBG/ThreeBG";
import Home from "./Containers/Home/Home";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <ThreeBG />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
};

export default App;
