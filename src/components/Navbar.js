import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className="logo"><Link to='/'>LOGO</Link></div>
			<ul>
				<li><Link to=''>Home</Link></li>
				<li><Link to='movies'>Movies</Link></li>
				<li><Link to='about'>About</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;