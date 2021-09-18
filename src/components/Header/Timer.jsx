import React, { useEffect, useState } from 'react'

import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
	en: {
		text: 'Before the launch on the exchange, there are:',
		day: 'days',
		hours: 'hours',
		minutes: 'minutes',
		seconds: 'seconds'
	},
	ru: {
		text: 'До запуска на биржу осталось:',
		day: 'день',
		hours: 'час',
		minutes: 'минут',
		seconds: 'секунд'
	},
}

const Timer = ({ locale }) => {
	const [days, setDays] = useState('00')
	const [hours, setHours] = useState('00')
	const [minutes, setMinutes] = useState('00')
	const [seconds, setSeconds] = useState('00')

	const getTimeRemainig = (deadline) => {
		const t = Date.parse(deadline) - Date.parse(new Date())

		const days = Math.floor(t / (1000 * 60 * 60 * 24))
		const hours = Math.floor((t / (1000 * 60 * 60)) % 60)
		const minutes = Math.floor((t / 1000 / 60) % 60)
		const seconds = Math.floor((t / 1000) % 60)

		return {
			t,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	const start = (deadline) => {
		let interval = setInterval(updateTimer, 1000)

		function updateTimer() {
			const t = getTimeRemainig(deadline)

			setDays(addZero(t.days))
			setHours(addZero(t.hours))
			setMinutes(addZero(t.minutes))
			setSeconds(addZero(t.seconds))

			if (t.t < 0) {
				setDays('00')
				setHours('00')
				setMinutes('00')
				setSeconds('00')

				clearInterval(interval)
			}
		}
	}

	function addZero(n) {
		if (n <= 9) {
			return '0' + n
		} else {
			return n
		}
	}

	useEffect(() => start('2021-10-12'), [])

	return (
		<div className="header-timer timer">
			<h2 className="header-timer__title">
				<IntlProvider locale={locale} messages={messages[locale]}>
					<FormattedMessage id="text" value={locale} />
				</IntlProvider>
			</h2>
			<div className="timer-body">
				<div className="timer-item">
					<span className="timer-item__num">{days}</span>
					<span className="timer-item__text">{messages[locale].day}</span>
				</div>
				<div className="timer-item">
					<span className="timer-item__num">{hours}</span>
					<span className="timer-item__text">{messages[locale].hours}</span>
				</div>
				<div className="timer-item">
					<span className="timer-item__num">{minutes}</span>
					<span className="timer-item__text">{messages[locale].minutes}</span>
				</div>
				<div className="timer-item">
					<span className="timer-item__num">{seconds}</span>
					<span className="timer-item__text">{messages[locale].seconds}</span>
				</div>
			</div>
		</div>
	)
}

export default Timer
