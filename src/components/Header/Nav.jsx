import React, { useState } from 'react'

import Logo from '../../assets/img/logo.svg'

import { IntlProvider, FormattedMessage } from 'react-intl'

let openBurger = () => {
	let burger = document.querySelector('.burger__btn')
	let sidebar = document.querySelector('.header-nav__left')
	let body = document.querySelector('body')
	if (burger.classList.contains('active')) {
		sidebar.classList.remove('active')
		burger.classList.remove('active')
		body.style.overflow = 'auto'
	} else {
		sidebar.classList.add('active')
		burger.classList.add('active')
		body.style.overflow = 'hidden'
	}
}
let closeBurger = (event) => {
	let burger = document.querySelector('.burger__btn')
	let sidebar = document.querySelector('.header-nav__left')
	let body = document.querySelector('body')
	if (
		window.outerWidth <= 690 &&
		!event.target.classList.contains('header-nav__left') &&
		!event.target.classList.contains('header-list') &&
		!event.target.classList.contains('header-languages')
	) {
		sidebar.classList.remove('active')
		burger.classList.remove('active')
		body.style.overflow = 'auto'
	}
}

const languages = [
	{ id: 1, value: 'ru', text: 'EN' },
	{ id: 2, value: 'en', text: 'RU' },
]

const messages = {
	en: {
		about: 'About Us',
		questions: 'F&Q',
		news: 'News',
		contacts: 'Contacts',
	},
	ru: {
		about: 'О нас',
		questions: 'F&Q',
		news: 'Новости',
		contacts: 'Контакты',
	},
}

const Nav = ({ locale, setLocale }) => {
	const [selected, setSelected] = useState(1)

	return (
		<div className="header-nav">
			<img src={Logo} alt="logo" className="header-nav__logo" />
			<div className="burger__btn" onClick={openBurger}>
				<div className="burger__line-one"></div>
				<div className="burger__line-two"></div>
				<div className="burger__line-three"></div>
			</div>
			<div className="header-nav__left" onClick={closeBurger}>
				<ul className="header-list">
					<li className="header-list__item">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<a
								href="#aboutCompany"
								className="header-list__link"
							>
								<FormattedMessage id="about" value={locale} />
							</a>
						</IntlProvider>
					</li>
					<li className="header-list__item">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<a href="#questions" className="header-list__link">
								<FormattedMessage
									id="questions"
									value={locale}
								/>
							</a>
						</IntlProvider>
					</li>
					<li className="header-list__item">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<a href="#news" className="header-list__link">
								<FormattedMessage id="news" value={locale} />
							</a>
						</IntlProvider>
					</li>
					<li className="header-list__item">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<a href="#footer" className="header-list__link">
								<FormattedMessage
									id="contacts"
									value={locale}
								/>
							</a>
						</IntlProvider>
					</li>
				</ul>

				<div className="header-languages">
					{languages.map((item, i) => (
						<span
							className={`header-languages__item ${
								selected === i ? 'selected' : ''
							}`}
							key={item.id}
							onClick={() => {
								setLocale((prev) =>
									prev === 'ru' ? 'en' : 'ru',
								)
								setSelected(i)
							}}
						>
							{item.text}
						</span>
					))}
					{/* <span className="header-languages__item">EN</span>
					<span className="header-languages__item selected">RU</span> */}
				</div>
			</div>
		</div>
	)
}

export default Nav
