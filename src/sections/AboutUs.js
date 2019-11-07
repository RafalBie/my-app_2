import React from 'react'

const employees = [
	{
		img: 'https://picsum.photos/id/1074/200/200',
		fullname: 'Lew Kowalski',
		rank: 'CEO',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Morbi vel massa et lacus egestas cursus a non
        magna. Fusce scelerisque blandit nunc, id malesuada
        ex lobortis a. Integer felis nisi, tempor elementum
        lorem in, varius pellentesque ligula. Duis efficitur
        lacinia enim, non tincidunt libero ultrices in.`,
    },
    {
		img: 'https://picsum.photos/id/1074/200/200',
		fullname: 'Staś Mopski',
		rank: 'CTO',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Morbi vel massa et lacus egestas cursus a non
        magna. Fusce scelerisque blandit nunc, id malesuada
        ex lobortis a. Integer felis nisi, tempor elementum
        lorem in, varius pellentesque ligula. Duis efficitur
        lacinia enim, non tincidunt libero ultrices in.`,
	}
]

const SingleEmployee = ({img, fullname, rank, description, isOdd})=>{
    return (
        <div className={['employee', isOdd ? 'employee-right' : 'employee-left'].join(' ')}>
            <img
                className='employee-img'
                src={img}
            />
            <div className='employee-txt'>
                <h2>{fullname} - {rank}</h2>
                <p>
                {description}
                </p>
            </div>
        </div>
    )
    
}

const AboutUs = () => {
	return (
		<section className='about-us' id='about-us'>
			<div className='container'>
                <h1>Nasi specjaliści</h1>
                {employees.map((element, idx) => {
                    return <SingleEmployee key={idx} {...element}
                        isOdd={idx % 2 == 1}
                    />
                })}
			</div>
		</section>
	)
}

export default AboutUs
