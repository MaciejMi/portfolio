import '../../assets/components.scss'

const ExperienceCard = ({ children, title, company, location, dates, image, countryIcon, countryAlt }) => {
	return (
		<div className="experienceCard">
			<div className="experienceCard__left">
				<h4>{title}</h4>
				<h5>{company}</h5>
				<div className="experienceCard__location">
					<p>{location}</p>
					<img src={countryIcon} alt={countryAlt} />
				</div>
				<p className="experienceCard__date">{dates}</p>
				<p>{children}</p>
			</div>
			<div className="experienceCard__right">
				<img src={image} alt={company} />
			</div>
		</div>
	)
}

export default ExperienceCard
