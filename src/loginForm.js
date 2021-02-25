import React, { Component } from 'react';

import Joi from 'joi-browser';
import Form from './form';
class LoginForm extends Form {

  constructor(props){
  super(props);
this.state={
  data:{username:"", password:""},
  errors:{}

};
this.schema = {
  username:Joi.string().required().label('Username'),
  password:Joi.string().required().label('Password')
};

this.doSubmit=this.doSubmit.bind(this);

}


   doSubmit(){
     console.log("submit");
   }

  render() {
   
    return (
     <div>
       <h1>Login Form</h1>
       
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.renderInput('username','Username','text')}
         {this.renderInput('password','Password','password')}
         <br/> 
         {this.renderButton('Login')}
         </form>
     </div>

    );
  }
}
export default LoginForm;