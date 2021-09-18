import React from 'react'

import AboutCompany from './AboutCompany'
import Questions from './Questions'
import QuestionMark from '../../assets/img/Question Mark.png'
import BenefitsCompany from './BenefitsCompany'


const About = ({ locale }) => {
	return (
		<div className="wrapper">
			<div className="blure"></div>
			<AboutCompany locale={locale} />
			<BenefitsCompany locale={locale}/>
			<Questions locale={locale} />
		</div>
	)
}

export default About
