import React from 'react';

const Navbar = () => {
	return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer">Home</a>
			<a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer">About</a>
			<a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer">Sign in</a>
		</nav>
	)
	
}

export default Navbar;