import React from "React";

// Booking Module Structure
//
// |- BookingComponent
//   |- BookingList
//   |   |- BookingListItem
//   | 
//   |- BookingForm

export class BookingComponent extends React.Component {
  render() {
    var data = [
      {'id':1, 'user': 'Pepe', 'date': '2016-12-12'},
      {'id':2, 'user': 'Marcos', 'date': '2016-11-12'},
      //{'user': 'Andres', 'date': '2016-10-12'},
      {'id':3, 'user': 'Andres'},
      {'id':4, 'user': 'Hernan', 'date': '2016-9-12'}
    ];
    return <div>
      <BookingList list={data} />
      <BookingForm />
    </div>
  }
}
// BookingList
class BookingList extends React.Component {
  render() {
  	var booking = this.props.list.map(function(book){
  		return <BookingListItem key={book.id} user={book.user} date={book.date}/>
  	})
		
    return <div>{booking}</div>
  }
}

// BookingListItem
class BookingListItem extends React.Component {
  render() {
    return <div> User: {this.props.user} <br/> date: {this.props.date}</div>
  }
}

BookingListItem.propTypes = {
  user: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

BookingListItem.defaultProps = {
  date: '0000-00-00'
};
 
// BookingForm
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state.user = {
    //   user: '',
    //   date: ''
    // };

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
    console.log(this.state.user);
    this.setState({
      user : {}
    });
  }

  render() {
    return <div>
      <h3>Reserve a date</h3>
        <form action="">
        User: <input value={this.state.user.user} type="text" name="user" onChange={this.handleChange}/>
        <br/>
        Date: <input value={this.state.user.date} type="text" name="date" onChange={this.handleChange}/>
        <br/>
        <input type="submit" onClick={this.submitForm.bind(this)} value="Send"/>
      </form>
    </div>
  }
}