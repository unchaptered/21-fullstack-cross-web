import React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import propType from "prop-types";
import Nav from "./Components/Nav";

import Home from "./Routes/Home";
import Account from "./Routes/Account";
import Profile from "./Routes/Profile";
import Wallet from "./Routes/Wallet";
import Products from "./Routes/Products";
import Menus from "./Routes/Menus";
import Maps from "./Routes/Maps";
import Questions from "./Routes/Questions";

export default ()=>{
    return (
        <Router>
            <>
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/account" exact component={Account} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/wallet" exact component={Wallet} />
                <Route path="/products" exact component={Products} />
                <Route path="/menus" exact component={Menus} />
                <Route path="/maps" exact component={Maps} />
                <Route path="/questions" exact component={Questions} />
            </>
        </Router>
    )
};