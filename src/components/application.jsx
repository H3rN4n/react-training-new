import React from "react";
import { Router, Route, browserHistory } from 'react-router'
import { BookingComponent } from './booking'

export class Application extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={BookingComponent}/>
                <Route path="about" component={BookingComponent}>
                    <Route path="me" component={BookingComponent}/>
                </Route>
            </Router>
        );
    }
}
