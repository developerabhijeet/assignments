import React from 'react';
import { Route} from 'react-router-dom';
import Nestedroute from './nestedroute';
import Team from './team';
import Technology from './technology';
function About(){
	return(
			<div className="container">
				<h4 className="center">ABOUT</h4>
				<p>My name is About</p>
				<Nestedroute/>
				
				<Route path="/about/team" component={Team}/>
				<Route path="/about/technology" component={Technology}/>
					
			</div>
		)
}
export default About;