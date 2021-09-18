import React, { useEffect, useState } from 'react'

import Slide1 from '../../assets/img/slide-1.jpg'
import Slide2 from '../../assets/img/slide-2.jpg'
import Slide3 from '../../assets/img/slide-3.jpg'
import Slide4 from '../../assets/img/slide-4.jpg'
import ArrowUp from '../../assets/img/chevron-up.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

import Slider from 'react-slick'

import { IntlProvider, FormattedMessage } from 'react-intl'

import SwiperCore, {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
} from 'swiper/core'
import { useWindowSize } from '../../helpers/useWindowSize'

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])

const data = [
	{
		id: 1,
			title: {
			ru: `Команда разработчиков Expovision выиграла
    	всероссийский хакатон`,
			en: 'The Expovision development team won\n' +
					'All-Russian hackathon'
			},
			tag: {
				ru: `#событие`,
				en: '#event'
			},
			date:{
				ru: '24 декабря' ,
				en: '24 december' ,
			},
			img: Slide1,
	},
	{
		id: 2,
		title: {
			ru: `Команда Expovision прошла отбор на международный хакатон во Флориде`,
			en: 'Expovision Team Qualifies for the Florida International Hackathon'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide2,
	},
	{
		id: 3,
		title: {
			ru: `Expovision запускает блокчейн платформу по покупке недвижимости`,
			en: 'Expovision launches blockchain real estate buying platform'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide3,
	},
	{
		id: 4,
		title: {
			ru: `Образовательная платформа Expovision ED начнет свою работу в следующем году`,
			en: 'Expovision ED education platform launches next year'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide4,
	},
	{
		id: 5,
		title: {
			ru: `Команда разработчиков Expovision выиграла всероссийский хакатон`,
			en: 'The Expovision development team won\n' +
				'All-Russian hackathon'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide1,
	},
	{
		id: 6,
		title: {
			ru: `Команда разработчиков Expovision выиграла
    	всероссийский хакатон`,
			en: 'The Expovision development team won\n' +
				'All-Russian hackathon'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide2,
	},
	{
		id: 7,
		title: {
			ru: `Команда разработчиков Expovision выиграла
    	всероссийский хакатон`,
			en: 'The Expovision development team won\n' +
				'All-Russian hackathon'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide3,
	},
	{
		id: 8,
		title: {
			ru: `Команда разработчиков Expovision выиграла
    	всероссийский хакатон`,
			en: 'The Expovision development team won\n' +
				'All-Russian hackathon'
		},
		tag: {
			ru: `#событие`,
			en: '#event'
		},
		date:{
			ru: '24 декабря' ,
			en: '24 december' ,
		},
		img: Slide4,
	},
]

const messages = {
	ru: {
		title: 'новости',
		body: `Будьте в курсе всех последних событий компании
        Expovision. 
        Это поможет оценить риски и делать более грамотные
        вложения`,
	},
	en: {
		title: 'news',
		body: 'Keep up to date with all the latest events from Expovision. This will help you assess risks and make better investments.',
	},
}

const SliderItem = ({ locale }) => {
	let openSlide = window.outerWidth >= 1000 ? 4 : 2

	const openSlider = () => {
		let opencount = window.outerWidth >= 1000 ? 4 : 2
		let slides = document.querySelectorAll('.adaptive__slider-item')
		if (openSlide >= slides.length) {
			for (let id = opencount; id < slides.length; id++) {
				slides[id].style.opacity = '0'
				setTimeout(() => {
					slides[id].style.display = 'none'
				}, 300)
			}
			openSlide = opencount
		} else {
			for (
				let id = openSlide;
				id < openSlide + opencount && id < slides.length;
				id++
			) {
				slides[id].style.display = 'block'
				setTimeout(() => {
					slides[id].style.opacity = '1'
				}, 300)
			}
			openSlide += window.outerWidth >= 1000 ? 4 : 2
		}
		if (
			openSlide >= slides.length &&
			document.querySelector('.adaptive__slider-btntitle').innerText !==
			'Скрыть'
		) {
			document.querySelector('.adaptive__slider-btntitle').innerText =
				'Скрыть'
			document.querySelector(
				'.adaptive__slider-openbtn img',
			).style.transform = 'rotate(-180deg)'
		} else if (
			document.querySelector('.adaptive__slider-btntitle').innerText ===
			'Скрыть'
		) {
			document.querySelector('.adaptive__slider-btntitle').innerText =
				'Показать еще'
			document.querySelector(
				'.adaptive__slider-openbtn img',
			).style.transform = 'rotate(0)'
		}
	}

	const settings = {
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		centerPadding: '20px',
		autoplay: true,
		autoplaySpeed: 2000,
	}

	return (
		<div className="news" id="news">
			<div className="container">
				<div className="news-header">
					<h1 className="news-header__title">
						<span>{locale === 'en' ? 'Latest' : 'Последние'} </span>
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<FormattedMessage id="title" value={locale} />
						</IntlProvider>
					</h1>
					<p className="news-header__text">
						<IntlProvider
							locale={locale}
							messages={messages[locale]}
						>
							<FormattedMessage id="body" value={locale} />
						</IntlProvider>
					</p>
				</div>
			</div>

			<Slider {...settings}>
				{data.map((items) => (
					<React.Fragment key={items.id}>
						<div style={{ width: '403px' }} className="slide">
							<div className="swiper-slide__shadow">
								<img
									style={{ width: '403px' }}
									src={items.img}
									alt="slide-img"
									className="swiper-slide__img"
								/>
							</div>
							<span className="swiper-slide__hashtag">{items.tag[locale]}</span>
							<h3 className="swiper-slide__title">{items.title[locale]}</h3>
							<span className="swiper-slide__date">{items.date[locale]}</span>
						</div>
					</React.Fragment>
				))}
			</Slider>
			<div className="adaptive__slider">
				<div className="adaptive__slider-container">
					{data.map((items, count) => (
						<div
							key={items.id}
							className="adaptive__slider-item"
							style={{
								display: `${
									window.outerWidth >= 1000 && count >= 4
										? 'none'
										: window.outerWidth < 1000 && count >= 2
											? 'none'
											: 'block'
								}`,
								opacity: `${
									window.outerWidth >= 800 && count >= 4
										? '0'
										: window.outerWidth < 800 && count >= 2
											? '0'
											: '1'
								}`,
							}}
						>
							<img
								style={{ width: '100%' }}
								src={items.img}
								alt="slide-img"
								className="swiper-slide__img"
							/>
							<span className="swiper-slide__hashtag">{items.tag[locale]}</span>
							<h3 className="swiper-slide__title">{items.title[locale]}</h3>
							<span className="swiper-slide__date">{items.date[locale]}</span>
						</div>
					))}
				</div>
				<div className="adaptive__slider-openbtn" onClick={openSlider}>
					<div className="adaptive__slider-btntitle">
						Показать еще
					</div>
					<img src={ArrowUp} alt="" />
				</div>
			</div>
		</div>
	)
}

export default SliderItem
