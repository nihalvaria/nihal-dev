import React, { useEffect } from 'react';
import MainPage from './Templates/MainPage/MainPage';
import { PageContextProvider } from "./Context/PageContext"
const App = () => {

  return (
	<>
	  	<PageContextProvider>
			<MainPage />
	  	</PageContextProvider>
	</>
  );
}

export default App;
