import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";

import Nav from "./components/Nav";

const App = ()=>(
    <Router>
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/"component={Home}/>
                <Route exact path="/contact" componsent={Contact}/>
                <Route exact path="/portfilio" component={Portfolio}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
);
export default App;