import React from "react";
import ThreeBG from "./Components/ThreeBG/ThreeBG";
import Home from "./Containers/Home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return (
        <>
            <ThreeBG />
			<Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
};

export default App;
