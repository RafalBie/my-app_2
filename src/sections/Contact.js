import React from 'react'

// wybór tematu wiadomości
// input na imie i nazwisko
// input na email
// textarea - content
// checkbox - subcription

// co się dzieje na wysyłce
// pobieramy sobie stan formularza this.state
// robimy "request" z setTimeout na 3 sek - console.log(this.state)

// jak ma działać validacja

class ContactForm extends React.Component {
	state = {
		subject: 'hidden',
		fullName: '',
		email: '',
		content: '',
		subscription: true,

		imBusy: false,
		imWithError: false,
	}

	changeStateOfInput = (event) => {
		const { value, name, type, checked } = event.target

		if (type === 'checkbox') {
			this.setState({
				[name]: checked,
			})
		} else {
			this.setState({
				[name]: value,
			})
		}
	}

	isFormValid = () => {
		console.log('validate', this.state)
		const {
			subject,
			fullName,
			email,
			content,
			subscription
		} = this.state

		const isSubjectValid = (subject !== '') && (subject !== 'hidden')
		const isFullNameValid = fullName !== ''

		const isEmailValid = (email !== '') && (email.includes('@'))

		const isContentValid = content !== ''
		const isSubscriptionValid = subscription === true


		const conditions = [isSubjectValid, isFullNameValid, isEmailValid, isContentValid, isSubscriptionValid]
		const isConditionsValid = !conditions.includes(false)

		return isConditionsValid
	}

	onFormSubmit = (event) => {
		event.preventDefault()

		// walidacja
		if(this.isFormValid()){
			this.setState({
				imBusy:true
			})
	
			// to jest axios
			setTimeout(() => {
				console.log('text', this.state)
				this.setState({
					subject: 'hidden',
					fullName: '',
					email: '',
					content: '',
					subscription: true,
					imBusy: false,
					imWithError: false,
				})
			}, 3000)
		}
		else{
			this.setState({
				imWithError:true
			})
		}
	}

	render() {
		const {
			subject,
			fullName,
			email,
			content,
			subscription,
			imBusy,
			imWithError
		} = this.state

		return (
			<section className='contact' id='contact'>
				<div className='container'>
				<div>
				<h1>Skontaktuj się z nami</h1>
				</div>
					{imBusy ? (
						<span>Proszę czekać</span>
					) : (
						<form onSubmit={this.onFormSubmit}>
							<div>
								<label>Wybierz temat wiadomości</label>
								<select
									required
									onChange={this.changeStateOfInput}
									value={subject}
									name='subject'
								>
									<option disabled hidden value="hidden">Wybierz temat</option>
									<option>Temat 1</option>
									<option>Temat 2</option>
									<option>Temat 3</option>
								</select>
							</div>
							<div>
								<input
								required
									type='text'
									name='fullName'
									placeholder='Wpisz imię i nazwisko'
									value={fullName}
									onChange={this.changeStateOfInput}
								/>
							</div>
							<div>
								<input
								required
									type='email'
									placeholder='Wpisz email'
									name='email'
									value={email}
									onChange={this.changeStateOfInput}
								/>
							</div>
							<div>
								<textarea
									required
									placeholder='Treść wiadomości'
									value={content}
									name='content'
									onChange={this.changeStateOfInput}
								/>
							</div>
							<div>
								<label htmlFor='subscription'>
									<input
										id='subscription'
										type='checkbox'
										required
										name='subscription'
										onChange={this.changeStateOfInput}
										checked={subscription}
									/>
									Subskrybcja
								</label>
							</div>
							<div>
								<button>Wyślij</button>
							</div>

							{imWithError && <div>
								<span style={{color:'red'}}>Błąd, formularz zawiera niewłaściwe dane</span>
							</div>}

						</form>
					)}
				</div>
			</section>
		)
		// 	}
		// }
	}
}

export default ContactForm
