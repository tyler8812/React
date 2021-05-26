import React, { Component } from "react";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import "./AppRouter.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/itemDetail";

class AppRouter extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <div className="AppRouter">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/About" exact component={About}></Route>
                        <Route path="/Shop" exact component={Shop}></Route>
                        <Route path="/Shop/:id" component={ItemDetail}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
};

export default AppRouter;
