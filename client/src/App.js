import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Album from "./components/album";
import About from "./components/about";

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={Album} />
            <Route path="/about" component={About} />
        </div>
    );
};

export default App;