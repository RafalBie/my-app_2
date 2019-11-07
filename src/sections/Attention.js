import React from 'react';


const langs = {
    'pl':'Nasza firma oferuje najwyższej jakości produkty',
    'en':'Our company offers best quality services',
  }

const Attention = ({selectedLang='en', subTitle}) => {
	return (
		<section className='prime'>
			<div className='shadow'>
				<div className='container'>
					<hgroup className='prime-h'>
                        <h1>{langs[selectedLang]}</h1>
                        <h2>{subTitle}</h2>
					</hgroup>
					<button className='offer-btn'>oferta</button>
				</div>
			</div>
		</section>
	)
}

export default Attention