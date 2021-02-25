import React from 'react';
import { Link } from 'react-router-dom';
function Nestedroute() {
	return (
		<div className="container">
			<Link to="/about/team">Team</Link><br />
			<Link to="/about/technology">Technology</Link>
		</div>
	)
}
export default Nestedroute;