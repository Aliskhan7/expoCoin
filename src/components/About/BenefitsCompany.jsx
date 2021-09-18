import React from 'react'

import Home from '../../assets/img/Home.png'
import Briefcase from '../../assets/img/Briefcase.png'
import Edit from '../../assets/img/Edit.png'
import Clock from '../../assets/img/Clock.png'

import { IntlProvider, FormattedMessage } from 'react-intl'

const data = [
	{
		id: 1,
		texts: {
			ru: {
				title: `Многофункциональность`,
				body: `Токен может быть вашей инвестицей, а так же 
					средством оплаты для покупки недвижимости 
					на платформе Expovision`,
			},
			en: {
				title: `Multifunctionality`,
				body: `
The token can be your investment, as well as a means of payment for buying real estate on the Expovision platform`,
			},
		},
		img: Clock,
	},
	{
		id: 2,
		texts: {
			ru: {
				title: `Простота`,
				body: `Пара кликов отделяет клинтов от приобретения
				недвижимости`,
			},
			en: {
				title: `Simplicity`,
				body: `A couple of clicks separates clients from real estate purchases`,
			},
		},
		img: Briefcase,
	},
	{
		id: 3,
		texts: {
			ru: {
				title: `Доступность и интерактивность`,
				body: `Никакой бюрократии и третьих лиц при 
				проведении транзакций благодаря использованию 
				Smart-контрактов`,
							},
			en: {
				title: `Accessibility and interactivity`,
				body: `No bureaucracy or third parties
						conducting transactions through the use
						Smart contracts `,
			},
		},
		img: Edit,
	},
	{
		id: 4,
		texts: {
			ru: {
				title: `3D визуализация`,
				body: `Встроенные инструменты для 3D визуализации
				интерьера и экстерьера недвижимости `,
			},
			en: {
				title: `3D rendering`,
				body: `
					Built-in tools for 3D visualization of the interior and exterior of real estate`,
			},
		},
		img: Home,
	},
]

const messages = {
	ru: {
		text: 'Приемущества EXPO',
		textVideoTitle: 'Expovision - это международная IT-компания, предлагающая ' +
			'разнообразный спектр услуг от разработки ' +
			'дизайна продукта до создания полноценного ПО и медиа-контента',
		textVideo: 'Теперь мы становимся часть крипто-индустрии, предлагая ей\n' +
			'инновационное блокчейн-решение в сфере покупки и продажи\n' +
			'недвижимости'
	},
	en: {
		text: 'Achievements of EXPO',
		textVideoTitle: 'Expovision is an international IT company offering a diverse ' +
			'range of services from product design ' +
			'development to complete software and media content creation.',
		textVideo: 'Now we are becoming a part of the crypto industry, offering it an ' +
			'innovative blockchain solution in the field of buying and selling real estate'
	},
}

const AboutCompany = ({ locale }) => {
	console.log(locale)
	return (
		<div>
			<div className="aboutСompany" id="aboutCompany">
				<div className="container">
					<div className="aboutСompany__title">
						<IntlProvider locale={locale} messages={messages[locale]}>
							<FormattedMessage id="text" value={locale} />
						</IntlProvider>
					</div>
					<div className="aboutCompany__list">
						{data.map((item) => (
							<div className="aboutCompany-list__item" key={item.id}>
								<img
									src={item.img}
									alt={item.texts[locale]}
									className="aboutCompany-list__img imgBenefits"
								/>
								<div className="aboutCompany-list__text">
									<span className="aboutCompany-list__title">
										{item.texts[locale].title}
									</span> <br/>
									{item.texts[locale].body}
								</div>
							</div>
						))}
					</div>
					<div className='video-block'>
						<div className="video-block__text">
							<h3>{messages[locale].textVideoTitle}</h3>
							<p>{messages[locale].textVideo}</p>
						</div>
						<div className="video-block__item">
							<iframe src="https://www.youtube.com/embed/BgIPtKs0HxE"
											title="YouTube video player" frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutCompany
