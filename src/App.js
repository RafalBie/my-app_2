import React from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

// import Attention from './sections/Attention'
// import AboutUs from './sections/AboutUs'
// import Services from './sections/Services'
// import ContactForm from './sections/Contact'
import Input from './tasks/task2/task2_1'
import HtmlButton from './tasks/task2/task2_2'
// import ToDoList from './tasks/task2/task2_3'
import Form from './tasks/task3/task3_1'

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
				<HtmlButton/>
				{/* <ToDoList/> */}
				<Form/>
			</Main>
			<Footer />
		</div>
	)
}

export default App
// jestem