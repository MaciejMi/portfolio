import '../assets/footer.scss'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer__left">
					<p>&copy; {currentYear} - Maciej Michalczyk</p>
				</div>
				<div className="footer__right">
					<a href="#">Home</a>
					<a href="#aboutme">O mnie</a>
					<a href="#projects">Projekty</a>
					<a href="#experience">Doświadczenie</a>
					<a href="#blog">Blog</a>
					<a href="#contact">Kontakt</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
