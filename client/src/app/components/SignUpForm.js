import React from 'react';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleFormInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUpRequest(this.state);
    // axios.post('/api/users/signup', {
    //   name: this.state.username,
    //   email: this.state.email,
    //   password: this.state.password
    // });
  }

  render () {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h1>Sign Up Here!</h1>

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleFormInputChange}
        />

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

        <input type="submit" value="Sign up" />
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired
}

export default SignUpForm;
