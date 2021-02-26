import React,{Component} from 'react';
class Form extends Component{
 Alertng = (e) =>{
	 
	alert("Please verify your Data, After submission details cannot be edited.")
 }
 render(){
	return (
		<div className="container">
			<form>
				<label>Enter Name</label>
				<input type="text" className="form-control" />
				<br />
				<label>Enter Password</label>
				<input autoFocus type="password" className="form-control" />
				<br /><br />
				<button class="btn btn-success" onClick={this.Alertng}>SUBMIT</button>
			</form>
		</div>
	);
	}
}
export default Form;