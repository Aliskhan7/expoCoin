import React, { useState } from 'react'

import Chevron from '../../assets/img/chevron-up.svg'

import { IntlProvider, FormattedMessage } from 'react-intl'
import QuestionMark from '../../assets/img/Question Mark.png'

const questions = [
	{
		id: 5,
		texts: {
			ru: {
				title: 'Что такое токены Expovision?',
				body: `Expocoins (EXPO) - это токены компании Expovision. Владение данными токенами позволяет участвовать в развитии компании, получать дивиденды, оплачивать товары и услуг на всех платформах экосистемы Expovision и предоставляют возможность торговать ими на крипто-биржах. 
Всего выпущено ограниченное количество токенов - 200 000 000.`,
			},
			en: {
				title: 'What are Expovision tokens?',
				body: `Expocoin (EXPO) are tokens of the company Expovision. The ownership of these tokens allows users to take part in the development of the company, receive dividends, pay for goods and services across all the Expovision platforms. They also provide investing benefits for the users, allowing trading on crypto exchanges or keeping them as a long-term investment. 
The total limited number of tokens issued is 200,000,000.`,
			},
		},
	},
	{
		id: 6,
		texts: {
			ru: {
				title: 'Преимущества и применение токенов',
				body: `Токены Expocoin дают возможность владельцам токена рассчитывать на увеличение 
				прибыли за счет курсовой разницы. Более того, владельцы EXPO принимают непосредственное 
				участие в развитии компании и всех ее сервисов. Так же при оплате покупок токенами 
				EXPO пользователи получают скидку на платформах компании Expovision.`,
			},
			en: {
				title: 'Advantages and how to use?',
				body: `Expocoin tokens allow its owners to profit on the exchange rate difference. Moreover, the EXPO owners are directly involved in the development of the company and all its services. Also, when paying for purchases on Expovision's platforms with EXPO tokens, users receive a discount.`,
			},
		},
	},
	{
		id: 7,
		texts: {
			ru: {
				title: 'Где и как купить токены Expovision?',
				body: `Токены EXPO можно будет приобрести на данном сайте во время ICO. 
				После окончания ICO токены будут доступны на различных крипто-биржах и крипто-обменниках.`,
			},
			en: {
				title: 'Where to buy Expocoin tokens?',
				body: `EXPO tokens can be purchased  at this web site when we will launch ICO, after it will be available on various crypto-exchanges.`,
			},
		},
	},

	{
		id: 8,
		texts: {
			ru: {
				title: 'Почему нам доверяют?',
				body: `Expovision существует с 2018 года и за 4 года на рынке стал одним из топ-15 
				VR компаний России, победителем и призером множества различных IT-конкурсов и хакатонов. 
				Среди наших клиентов крупные международные компании с Бахрейна, Турции, Германии и ОАЭ. 
				Образовательный центр ExpovisionED подготовил десятки квалифицированных специалистов в различных 
				IT направлениях и постоянно продолжает свое развитие и расширение. `,
			},
			en: {
				title: 'Why are we trusted?',
				body: `Expovision was founded in 2018 and in 4 years on the market has become one of the 
				TOP-15 VR companies in Russia, the winner of many different IT competitions and hackathons. 
				Our clients include large international companies from Bahrain, Turkey, Germany and the United 
				Arab Emirates. ExpovisionED educational center has trained dozens of qualified specialists in various IT areas and is constantly 
				continuing its development and expansion.`,
			},
		},
	},
]

const messages = {
	ru: {
		text: 'задаваемые вопросы',
	},
	en: {
		text: 'F&Q',
	},
}

const Questions = ({ locale }) => {
	const [isActive, setIsActive] = useState(null)

	const showMessage = (id) => {
		setIsActive(id)

		if (id === isActive) {
			setIsActive(null)
		}
	}

	return (
		<div id="questions" className="questions">
			<img src={QuestionMark} alt="" className="question-mark" />
			<h2 className="questions__title">
				{locale === 'ru' ? <span>Часто </span> : ''}
				<IntlProvider locale={locale} messages={messages[locale]}>
					<FormattedMessage id="text" value={locale} />
				</IntlProvider>
			</h2>
			<div className="line"></div>
			<div className="questions__list">
				{questions.map(({ id, texts }, i) => (
					<div key={id}>
						<div
							className="questions-list__item"
							onClick={() => showMessage(i)}
						>
							<div className="questions-list__item-title">
								{texts[locale].title}
								<img
									src={Chevron}
									alt=""
									className={`questions-list__item-icon ${
										isActive === i ? 'active' : ''
									}`}
								/>
							</div>
							<div
								className={`questions-list__item-text ${
									isActive === i ? 'active' : ''
								}`}
							>
								{texts[locale].body}
							</div>
						</div>
						<div className="line"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Questions
