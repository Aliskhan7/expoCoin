import React from 'react'
import Circles from '../../assets/img/circles.svg'
import Eye from '../../assets/img/eye.svg'
import Laptop from '../../assets/img/laptop.png'
import Elipses from '../../assets/img/elipses.svg'
import Nav from './Nav'
import Timer from './Timer'
import { IntlProvider, FormattedMessage } from 'react-intl'
import * as PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import loadPdfRu from './pdfFile/Whitepaper RUS.pdf'
import loadPdfEn from './pdfFile/Whitepaper ENG.pdf'

const messages = {
	en: {
		title: `Become an investor in a dynamically developing international IT company`,
		subtitle: `Take the opportunity to become a part of our company through ExpoCoin (EXPO) tokens`,
	},
	ru: {
		title: `Стань инвестором динамично
		развивающейся международной ИТ компании`,
		subtitle: `Используй возможность стать частью нашей компании посредством токенов ExpoCoin (EXPO)`,
	},
}

Link.propTypes = {
	to: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node
}

const Header = ({ locale, setLocale }) => {



	return (
		<header className="header">
			<div className="container">
				<Nav setLocale={setLocale} locale={locale} />
				<div className="header-intro">
					<div className="header-intro__info">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<h1 className="header-intro__title">

								{messages[locale].title}
							</h1>
						</IntlProvider>

						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<p className="header-intro__text">
								<FormattedMessage
									id="subtitle"
									value={locale}
								/>
							</p>
						</IntlProvider>

						<div className="header-timer__container">
							<Timer locale={locale} />
							<img
								src={Circles}
								alt="circles"
								className="header-intro__circles"
							/>
							<img
								src={Eye}
								alt="eye"
								className="header-intro__eye"
							/>
						</div>
					</div>

					<img
						src={Laptop}
						alt="laptop"
						className="header-intro__img"
					/>
				</div>
				{locale === 'ru' ? <a className='downloadFile' href={loadPdfRu} type="application/pdf; download='pdf'" rel="noopener noreferrer" download>Скачать Whitepaper</a> :
					<a className='downloadFile' href={loadPdfEn} type="application/pdf; download='pdf'" rel="noopener noreferrer" download>Download Whitepaper</a>
				}

			</div>
			<img src={Elipses} alt="" className="achievements__circles" />

		</header>
	)
}

export default Header
