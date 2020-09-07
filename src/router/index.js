import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Sign } from "./assembly";

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/sign' component={Sign} />
                </Switch>
            </BrowserRouter>
        );
    }
}
