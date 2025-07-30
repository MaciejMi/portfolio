import '../assets/section.scss'

const Section = ({ title, className, children, id }) => {
	return (
		<section className={`${className} section`}>
			<div className="wrapper">
				<h2 id={id}>{title}</h2>
				{children}
			</div>
		</section>
	)
}

export default Section
