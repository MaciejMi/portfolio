import { useEffect, useState } from 'react'
import '../../assets/components.scss'

const ArrowUp = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setShow(true)
			} else {
				setShow(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<a className={`arrowUp ${show ? 'visible' : 'hidden'}`} href="#">
			<i className="ti ti-caret-up"></i>
		</a>
	)
}

export default ArrowUp
