import { useState } from 'react'
import { About, Footer, Header, Modal, Slider } from './components'

function App() {
	const [locale, setLocale] = useState('ru')
	const [showModal, setShowModal] = useState(false)
	const [emailData, setEmailData] = useState({})

	return (
		<>
			<Header locale={locale} setLocale={setLocale} />
			<About locale={locale} />
			<Slider locale={locale} />
			<Footer
				locale={locale}
				setEmailData={setEmailData}
				setShowModal={setShowModal}
			/>
			<Modal
				isOpen={showModal}
				onClose={setShowModal}
				emailData={emailData}
			/>
		</>
	)
}

export default App
