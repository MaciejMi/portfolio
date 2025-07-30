import '../assets/section.scss'

const Section = ({ title, className, children }) => {
	return (
		<section className={`${className} section`}>
			<div className="wrapper">
				<h2>{title}</h2>
				{children}
			</div>
		</section>
	)
}

export default Section
