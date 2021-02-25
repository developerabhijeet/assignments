import React, { Component } from 'react';
import Input  from "./input";
class LoginForm extends Component {
constructor(props){
  super(props);
  this.state={
    account:{username:'', password:''}
  };
}
  handleSubmit(e){
    e.preventDefault(); 
    const username = this.username.current.value;
  };
  handleChange({currentTarget: input}){
    var account = {...this.state.account};
    account[input.name]=input.value;
    this.setState({account}); 
  }; 
  render() {
    const {account} = this.state;
    return (
     <div>
       <h1>Login Form</h1>
       
      <form onSubmit={this.handleSubmit}>
         <Input name="username" value={account.username} label="Username" onChange={this.handleChange}/>
         <Input name="password" value={account.password} label="Password" onChange={this.handleChange}/>
       </form>
     </div>
    );
  }
}
export default LoginForm;