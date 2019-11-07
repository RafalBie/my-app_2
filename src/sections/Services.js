import React from 'react'

const services = [
	{
		serviceText: 'Usługa 1',
		isNew: true,
	},
	{
		serviceText: 'Usługa 2',
		isNew: false,
	},
	{
		serviceText: 'Usługa 3',
		isNew: false,
	},
	{
		serviceText: 'Usługa 4',
		isNew: true,
	},
	{
		serviceText: 'Usługa 5',
		isNew: false,
	},
	{
		serviceText: 'Usługa 6',
		isNew: true,
	},
]

const SingleService = ({ serviceText = 'Usługa', isNew = false }) => {
	const Inner = (
		<React.Fragment>
			<br />
			(nowość)
			<div className='dot' />
		</React.Fragment>
	)

	return (
		<div className='services-box'>
			{serviceText}
			{isNew && Inner}
		</div>
	)
}

const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='container'>
				<h1>Czym zajmuje się nasza firma?</h1>
				<div className='services-group'>
					{services.map((element, idx) => {
						return <SingleService key={idx} {...element} />
					})}
				</div>
			</div>
		</section>
	)
}

export default Services
