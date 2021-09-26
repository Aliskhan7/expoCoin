import React from 'react'

import Logo from '../../assets/img/contacts-logo.svg'
import Elipses from '../../assets/img/elipses.svg'

import { IntlProvider, FormattedMessage } from 'react-intl'

import InputMask from 'react-input-mask'
import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const messages = {
	ru: {
		title: 'Контакты',
		number: 'Номер телефона',
		loc: 'Местонахождение',
		locText: 'г. Грозный, пр-кт Кадырова, 216',
		mail: 'Электронный адрес',
		text: `Оставьте ваш номер и мы перезвоним вам в течение
        нескольких минут`,
		btnText: 'Заказать звонок',
	},
	en: {
		title: 'Contacts',
		number: 'Phone number',
		loc: 'Location',
		locText: 'Grozny, Kadyrov avenue, 216',
		mail: 'Email address',
		text: 'Leave your number and we will call you back within a few minutes',
		btnText: 'Request a call',
	},
}

const Footer = ({ locale, setEmailData, setShowModal }) => {
	// const [formData, setFormData] = useState({ email: '', phone: '' })
  //
	// const handleChange = (e) => {
	// 	setFormData({ ...formData,
	// 		[e.target.email]: e.target.value,
	// 		[e.target.phone]: e.target.value})
	// }
  //
	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	const { data } = await axios({
	// 		method: 'post',
	// 		url: window.location.href + 'send.php',
	// 		formData
	// 	});
  //
  //
	// 	setEmailData(data)
	// 	setShowModal(true)
  //
	// 	setFormData({ email: '', phone: '' })
	// }

	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="footer__title">
					<IntlProvider locale={locale} messages={messages[locale]}>
						<FormattedMessage id="title" value={locale} />
					</IntlProvider>
				</div>

				<div className="footer-body">
					<img
						className="form__circles"
						src={Elipses}
						alt="elipses"
					/>
					<ul className="footer-list">
						<li className="footer-list__item">
							<p className="footer-list__item-title">
								<IntlProvider
									locale={locale}
									messages={messages[locale]}
								>
									<FormattedMessage
										id="mail"
										value={locale}
									/>
								</IntlProvider>
							</p>
							<p className="footer-list__item-text">
								info@expovision.org
							</p>
						</li>

						<li className="footer-list__item">
							<p className="footer-list__item-title">Instagram</p>
							<p className="footer-list__item-text">
								<a href="https://www.instagram.com/expovisioned/">@expovisioned</a>
							</p>
						</li>
					</ul>
          <Form locale={locale}/>

					{/*<form className="footer-form form">*/}
					{/*	<img*/}
					{/*		src={Logo}*/}
					{/*		alt="logo"*/}
					{/*		className="footer-form__logo"*/}
					{/*	/>*/}

					{/*	<div className="form-control">*/}
					{/*		<input*/}
					{/*			type="email"*/}
					{/*			name="email"*/}
					{/*			className="form-control__input"*/}
					{/*			onChange={handleChange}*/}
					{/*			value={formData.email}*/}
					{/*			placeholder='Email'*/}
					{/*		/>*/}

					{/*		<InputMask*/}
					{/*			name="phone"*/}
					{/*			className="form-control__input"*/}
					{/*			mask="+7\ (999) 999 99 99"*/}
					{/*			maskChar=" "*/}
					{/*			onChange={handleChange}*/}
					{/*			value={formData.phone}*/}
					{/*			placeholder='+7 (____) ___-__-__'*/}
					{/*		/>*/}
					{/*	</div>*/}

					{/*	<div className="form-bottom">*/}
					{/*		<p className="form-bottom__text">*/}
					{/*			<IntlProvider*/}
					{/*				locale={locale}*/}
					{/*				messages={messages[locale]}*/}
					{/*			>*/}
					{/*				<FormattedMessage*/}
					{/*					id="text"*/}
					{/*					value={locale}*/}
					{/*				/>*/}
					{/*			</IntlProvider>*/}
					{/*		</p>*/}
					{/*		<button type="submit" className="form-bottom__btn">*/}
					{/*			<IntlProvider*/}
					{/*				locale={locale}*/}
					{/*				messages={messages[locale]}*/}
					{/*			>*/}
					{/*				<FormattedMessage*/}
					{/*					id="btnText"*/}
					{/*					value={locale}*/}
					{/*				/>*/}
					{/*			</IntlProvider>*/}
					{/*		</button>*/}
					{/*	</div>*/}
					{/*</form>*/}
				</div>
			</div>
		</footer>
	)
}

export default Footer
