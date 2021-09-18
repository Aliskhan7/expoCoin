import { useEffect, useState } from 'react'

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 1300,
		height: 1000,
	})

	const isLaptop = windowSize.width > 960 && windowSize.width <= 1280

	const isMobile = windowSize.width <= 960
	const isMobileM = windowSize.width <= 960
	const isMobile2 = windowSize.width <= 960

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return {
		size: windowSize,
		isLaptop,
		isMobile,
		isMobile2,
		isMobileM,
	}
}
