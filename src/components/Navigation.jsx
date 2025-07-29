import { useState } from 'react'
import logo from '../assets/imgs/logo.png'
import '../assets/navigation.scss'

const Navigation = () => {
	const [isShowMenu, setIsShowMenu] = useState(false)
	const onMenuButtonHandle = () => {
		setIsShowMenu(previousState => !previousState)
	}

	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav__top">
					<a href="#" className="nav__logo">
						<img src={logo} alt="logo" />
					</a>
					<button className="nav__menu" onClick={onMenuButtonHandle}>
						<i className={isShowMenu ? 'ti ti-x' : 'ti ti-menu-2'}></i>
					</button>
				</div>
				<div className={isShowMenu ? 'nav__links' : 'nav__links nav__hide'}>
					<a href="#" className="nav__item">
						O mnie
					</a>
					<a href="#" className="nav__item">
						Projekty
					</a>
					<a href="#" className="nav__item">
						Doświadczenia
					</a>
					<a href="#" className="nav__item">
						Blog
					</a>
					<a href="#" className="nav__item">
						Kontakt
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
