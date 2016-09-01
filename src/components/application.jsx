import React from "react";
import { Router, Route, browserHistory } from 'react-router'
import { BookingComponent, BookingForm } from './booking'

export class Application extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={BookingComponent}/>
                <Route path="form" component={BookingForm}/>
            </Router>
        );
    }
}
