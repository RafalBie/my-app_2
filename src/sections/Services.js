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

const SingleService = ({ serviceText = 'Usługa', isNew = false, onElementClick }) => {
	const Inner = (
		<React.Fragment>
			<br />
			(nowość)
			<div className='dot' />
		</React.Fragment>
	)

	return (
		<div className='services-box'>
			<a onClick={onElementClick}>
			{serviceText}
			{isNew && Inner}
			</a>
		</div>
	)
}

// // // funkcyjny
// const Services = () => {
// 	// coś tu można zrobić
// 	// zapytanie do api

// 	return (
// 		<section className='services' id='services'>
// 			<div className='container'>
// 				<h1>Czym zajmuje się nasza firma?</h1>
// 				<div className='services-group'>


// 					{services.map((element, idx) => {
// 						return <SingleService key={idx} {...element} />
// 					})}


// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// klasowy / stanowy
class Services extends React.Component {

	state = {
		services:[],
		imBusy: true,
		imWithError: false
	}


	componentDidMount(){

		// BAD !!!
		// this.state.services = services

		// GOOD !
		// "zapytanie API"
		setTimeout(()=>{

			this.setState({
				services:services,
				imBusy:false
			})

			// onSuccess(services)

		}, 3000)

	}

	render() {
		const { services, imBusy, imWithError } = this.state

		// obsługę ładowania - loading
		if(imBusy === true){
			return (
				<section className='services' id='services'>
					<div className='container'>
						<h1>Trwa ładowanie usług...</h1>
					</div>
				</section>
			)
		}

		else{
			// obsługa błędów
			if(imWithError !== false){
				return (
					<section className='services' id='services'>
						<div className='container'>
							<h1 style={{color:'red'}}>Błąd !</h1>
						</div>
					</section>
				)
			}
			else{

				// gdy wszystko działa i są dane
				return (
					<section className='services' id='services'>
						<div className='container'>
							<h1>Czym zajmuje się nasza firma?</h1>
							<div className='services-group'>
								{services.map((element, idx) => {
									return <SingleService key={idx} {...element} 
										onElementClick={(event)=>{
											console.log('event', event)
											console.log('ten element', event.target)
											console.log('to co weszło do komponentu', {...element} )
										}}
									/>
								})}
							</div>
						</div>
					</section>
				)
			}
		}
		
	}
}

export default Services
