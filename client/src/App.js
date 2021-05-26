import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/navbar";
import CreateAlbum from "./components/createAlbum";
import About from "./components/about";

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/" component={CreateAlbum} />
            <Route path="/about" component={About} />
        </div>
    );
};

export default App;