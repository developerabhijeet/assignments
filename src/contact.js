import React, { Component } from 'react';
import Home from './home';
class Contact extends Component{
	constructor(props){
		super(props);
	this.handleSave=this.handleSave.bind(this);	
	}	
	handleSave(){
this.props.history.push("/");
	}

render(){return(
			<div className="container">
				<h4 className="center">CONTACT</h4>
				<p>My name is contact</p>
				<label>Enter Name</label>
				<input type="text"/>

				<button className="btn btn-primary" onClick={this.handleSave}>Contact</button>
			</div>
		);
	}
}
export default Contact;