import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import SpotifyCallback from "./pages/SpotifyCallback";

import Nav from "./components/Nav";

const App = ()=>(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/"component={Home}/>
                <Route exact path="/spotify-callback"component={SpotifyCallback}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
);
export default App;