import logo from '../assets/imgs/logo.png'
import '../assets/navigation.scss'

const Navigation = () => {
	return (
		<nav className="nav">
			<div className="wrapper">
				<a href="#" className="nav__logo">
					<img src={logo} alt="logo" />
				</a>
				<div className="nav__links">
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
