import React from 'react'

import Globe from '../../assets/img/globe.png'
import Lamp from '../../assets/img/lamp.png'
import Star from '../../assets/img/star.png'
import Target from '../../assets/img/target.png'
import Arrow from '../../assets/img/arrow-right.svg'

import { IntlProvider, FormattedMessage } from 'react-intl'

const data = [
	{
		id: 1,
		texts: {
			ru: `Expovision работает в 5 странах: Германия, Эстония, Россия, ОАЭ, Бахрейн`,
			en: 'Expovision operates in 5 countries: Germany, Estonia, Russia, UAE, Bahrain',
		},
		img: Globe,
	},
	{
		id: 2,
		texts: {
			ru: `Победители крупнейших в России ИТ конкурсов “Цифровой прорыв” и Sbercode`,
			en: 'Winners of the largest IT contests in Russia “Digital Breakthrough” and Sbercode',
		},
		img: Lamp,
	},
	{
		id: 3,
		texts: {
			ru: `Разработка и развитие десятка собственных стартапов`,
			en: 'Development and development of a dozen of our own startups',
		},
		img: Star,
	},
	{
		id: 4,
		texts: {
			ru: `ТОП-15 лучших VR компаний России`,
			en: 'TOP 15 best VR companies in Russia',
		},
		img: Target,
	},
]

const messages = {
	ru: {
		text: 'Достижения компании',
		link: 'Перейти на официальный сайт',
	},
	en: {
		text: 'Achievements of',
		link: 'Go to the official website',
	},
}

const AboutCompany = ({ locale }) => {
	console.log(locale)
	return (
		<div className="aboutСompany" id="aboutCompany">
			<div className="container">
				<div className="aboutСompany__title">
					<IntlProvider locale={locale} messages={messages[locale]}>
						<FormattedMessage id="text" value={locale} />
					</IntlProvider>
					<span> Expovision</span>
				</div>
				<div className="aboutCompany__list">
					{data.map((item) => (
						<div className="aboutCompany-list__item" key={item.id}>
							<img
								src={item.img}
								alt={item.texts[locale]}
								className="aboutCompany-list__img"
							/>
							<div className="aboutCompany-list__text">
								{item.texts[locale]}
							</div>
						</div>
					))}
				</div>
				<a
					href="https://expovision.tech/"
					target="_blank"
					className="aboutCompany__oficialSite"
					rel="noreferrer"
				>
					<IntlProvider locale={locale} messages={messages[locale]}>
						<FormattedMessage id="link" value={locale} />
					</IntlProvider>
					<img src={Arrow} alt="arrow" />
				</a>
			</div>
		</div>
	)
}

export default AboutCompany
