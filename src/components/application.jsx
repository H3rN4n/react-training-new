import React from "React";
import { BookingComponent } from './booking';

export interface ApplicationProps { }

export class Application extends React.Component {
    render() {
        return <div>
                <BookingComponent/>
               </div>;
    }
}
