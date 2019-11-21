import React from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

import Attention from './sections/Attention'
import AboutUs from './sections/AboutUs'
import Services from './sections/Services'
import ContactForm from './sections/Contact'
import Input from './tasks/task2'
import Form from './tasks/task3'
import './App.css'

const Main = ({ children }) => {
  return <main>{children}</main>
}


function App() {


	
	return (
		<div className='App'>
			{/* <Header /> */}
			<Main>
				{/* <Attention selectedLang={'pl'} subTitle={'Mogę coś wpisać'}/>
				<AboutUs/>
				<Services />
				<ContactForm/> */}
				<Input/>
				<Form/>
			</Main>
			<Footer />
		</div>
	)
}

export default App
// jestem