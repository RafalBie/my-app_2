import React from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

import Attention from './sections/Attention'
import AboutUs from './sections/AboutUs'
import Services from './sections/Services'

import './App.css'

const Main = ({ children }) => {
  return <main>{children}</main>
}


function App() {
	return (
		<div className='App'>
			<Header />
      <Main>
        <Attention selectedLang={'pl'} subTitle={'Mogę coś wpisać'}/>

				<AboutUs />
				<Services />
			</Main>
			<Footer />
		</div>
	)
}

export default App
