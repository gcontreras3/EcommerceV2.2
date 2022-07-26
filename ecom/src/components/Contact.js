import React from "react";
import './Contact.css'


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Thank you for reaching out; You will be notified in 24-48 hours: ' + this.state.value);
    event.preventDefault();
  }
  render(){
  return (
    <div className="form" >
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Phone #:
          <input type="number" name="name" />
        </label>
        <label>
          Email:
          <input type="email"  name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default Contact;
