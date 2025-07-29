import { useState } from 'react'
import logo from '../assets/imgs/logo.png'
import '../assets/navigation.scss'
import Badge from './Badge'

const Navigation = () => {
	const [isShowMenu, setIsShowMenu] = useState(false)

	const onMenuButtonClickedHandle = () => {
		setIsShowMenu(previousState => !previousState)
	}

	const onLinkClickedHandle = () => {
		setIsShowMenu(false)
	}

	return (
		<nav className="nav">
			<div className="wrapper">
				<div className="nav__top">
					<a href="#" className="nav__logo">
						<img src={logo} alt="logo" />
					</a>
					<button className="nav__menu" onClick={onMenuButtonClickedHandle}>
						<i className={isShowMenu ? 'ti ti-x' : 'ti ti-menu-2'}></i>
					</button>
				</div>
				<div className={isShowMenu ? 'nav__links' : 'nav__links nav__hide'}>
					<a href="#" className="nav__item" onClick={onLinkClickedHandle}>
						O mnie
					</a>
					<a href="#" className="nav__item" onClick={onLinkClickedHandle}>
						Projekty
					</a>
					<a href="#" className="nav__item" onClick={onLinkClickedHandle}>
						Doświadczenia
					</a>
					<a href="#" className="nav__item" onClick={onLinkClickedHandle}>
						Blog <Badge text="New" />
					</a>
					<a href="#" className="nav__item" onClick={onLinkClickedHandle}>
						Kontakt
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
