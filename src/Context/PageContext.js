import React, { useState } from "react";
import Home from "../Organisms/Home/Home"
const PageContext = React.createContext();

const PageContextProvider = (props) => {
    const [page, setPage] = useState("Home");

    const Components = {
        Home
    };

    const Component = (block) => {
        if (typeof Components[page] !== "undefined") {
            return React.createElement(Components[page]);
        }
        return React.createElement(() => <div>The component {block.component} has not been created yet.</div>);
    };

    return (
        <PageContext.Provider
            value={{
                page,
                setPage,
                Component
            }}
        >
            {props.children}
        </PageContext.Provider>
    );
};

export { PageContextProvider, PageContext };
