import React from "react";
import * as BookingActions from "../actions/bookingActions";
import BookingStore from "../stores/bookingStore";
import { withRouter } from 'react-router'

// Booking Module Structure
//
// |- BookingComponent
//   |- BookingList
//   |   |- BookingListItem
//   | 
//   |- BookingForm

export class BookingComponent extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
    console.log(withRouter);
    setTimeout(()=> this.props.router.push('/about'), 1000);
  
    this.getDates = this.getDates.bind(this);
    this.state = {
      dates: []
    };
  }

  componentWillMount() {
    this.getDates();
    BookingStore.on("change", this.getDates);
  }

  componentDidMount(){
    BookingActions.reloadDates();
  }

  componentWillUnmount() {
    BookingStore.removeListener("change", this.getDates);
  }

  getDates() {
    this.setState({
      dates: BookingStore.getAll(),
    });
  }

  reloadDates() {
    BookingActions.reloadDates();
  }

  render() {
    return (<div>
      <BookingList dates={this.state.dates} />
    </div>)
  }
}
// BookingList
class BookingList extends React.Component {
  render() {
  	var booking = this.props.dates.map(function(date, i){
  		return <BookingListItem key={i} userId={date.userId} desc={date.desc} providerId={date.providerId}/>
  	})
		
    return <div>
            <BookingForm />
            <div>{booking}</div>
          </div>
  }
}

// BookingListItem
class BookingListItem extends React.Component {
  render() {
    return (<div class="col-md-3 col-sm-6 hero-feature">
              <div class="thumbnail">
                  <img src="http://placehold.it/800x500" alt=""/>
                  <div class="caption">
                      <p>User: {this.props.userId}</p>
                      <p>User: {this.props.providerId}</p>
                      <p>{this.props.desc}</p>
                      <p>
                          <a href="#" class="btn btn-primary">Buy Now!</a>
                          <a href="#" class="btn btn-default">More Info</a>
                      </p>
                  </div>
              </div>
          </div>)  
  }
}

BookingListItem.propTypes = {
  userId: React.PropTypes.number.isRequired,
  providerId: React.PropTypes.number.isRequired,
  desc: React.PropTypes.string.isRequired
};

BookingListItem.defaultProps = {
  date: '0000-00-00'
};
 
// BookingForm
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : Object.assign({})
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // watchUserName(el){
  //   this.setState({user: el.target.value})
  // }

  // watchUserDate(el){
  //   this.setState({date: el.target.value})
  //}

  handleChange(e) {
    let field = e.target.name;
    let user = this.state.user;
    user[field] = e.target.value;
    this.setState({
      user
    });

  }

  submitForm(event){
    event.preventDefault();
    this.setState({
      user : {}
    });
  }

  render() {
    return <div>
      <h3>Reserve a date</h3>
        <div class="col-md-3 col-sm-6 hero-feature">
            <div class="thumbnail">
                <img src="http://placehold.it/250x80?text=Add%20New" alt=""/>
                <div class="caption">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon">User</div>
                    <input class="form-control" value={this.state.user.user} type="text" name="user" placeholder="UserName" onChange={this.handleChange}/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon">Provider</div>
                    <input class="form-control" value={this.state.user.date} type="text" name="date" placeholder="Provider" onChange={this.handleChange}/>
                  </div>
                </div>
                  <div class="form-group">
                    <select class="form-control" name="service" id="">
                      <option value="Complete">Complete</option>
                      <option value="Complete">Complete + 1</option>
                      <option value="Complete">Complete + 2</option>
                    </select>
                    <br/>
                    <button type="submit" onClick={this.submitForm.bind(this)} class="btn btn-success">Add New</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  }
}