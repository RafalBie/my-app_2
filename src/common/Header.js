import React from 'react';


const Header = () => {
	return (
		<header>
			<div className='container'>
				<a className='company-name' href='#'>
					nazwa firmy
				</a>
				<nav>
					<a href='#about-us'>o nas</a>
					<a href='#services'>oferta</a>
					<a href='kontakt.html'>kontakt</a>
				</nav>
			</div>
		</header>
	)
}

export default Header