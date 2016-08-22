import React from 'React';
import ReactDOM from 'React-dom';
import _ from 'lodash';
 
class BookingComponent extends React.Component {
  render() {
    var data = [
      {'user': 'Pepe', 'date': '2016-12-12'},
      {'user': 'Marcos', 'date': '2016-11-12'},
      //{'user': 'Andres', 'date': '2016-10-12'},
      {'user': 'Andres'},
      {'user': 'Hernan', 'date': '2016-9-12'}
    ];
    return <div>
      <BookingList list={data} />
      <BookingForm />
    </div>
  }
}

class BookingList extends React.Component {
  render() {
  	var booking = this.props.list.map(function(book){
  		return <BookingListItem user={book.user} date={book.date}/>
  	})
		
    return <div>{booking}</div>
  }
}

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
 
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      date: ''
    };
  }

  watchUserName(el){
    this.setState({user: el.target.value})
  }

  watchUserDate(el){
    this.setState({date: el.target.value})
  }

  submitForm(event){
    event.preventDefault();
    console.log(this.state);
    // this.setState({
    //   user: '',
    //   date: ''
    // });
  }

  render() {
    return <div>
      <h3>Reserve a date</h3>
        <form action="">
        User: <input type="text" onChange={this.watchUserName.bind(this)}/>
        <br/>
        Date: <input type="text" onChange={this.watchUserDate.bind(this)}/>
        <br/>
        <input type="submit" onClick={this.submitForm.bind(this)} value="Send"/>
      </form>
    </div>
  }
}

ReactDOM.render(<BookingComponent/>, document.getElementById('app'));