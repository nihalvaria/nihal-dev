import React, { useState } from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [page, setPage] = useState('Home')
   
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data) 
        });
        return response; 
    }

    return (
        <Context.Provider 
        value={{
            page,
            setPage,
            postData
        }}>
            {props.children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };