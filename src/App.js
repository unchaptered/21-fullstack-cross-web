import React, { Components } from "react";
import Router from "./Router";
import InitialStyles from "./Components/InitialStyles";

class App extends React.Component  {
    render(){
        return (
            <>
                <Router />
                <InitialStyles />
            </>
        );
    };
};

export default App;