import React from 'react';
import {connect} from 'react-redux';

import {loginUser} from './../actions/authentication';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h3>Log In Here!</h3>

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleFormInputChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleFormInputChange}
        />

        <input type="submit" value="Log In" />
      </form>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch(loginUser(email, password))
  // onLogin: login //TODO: another way, this is not for calling here
});

export default connect(undefined, mapActionsToProps)(LoginForm);
