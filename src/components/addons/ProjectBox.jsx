import Skill from './Skill'
import '../../assets/components.scss'

const ProjectBox = ({ title, image, children, skills, link }) => {
	return (
		<a className="projectBox" href={link} target="_blank">
			<img src={image} alt={title} />
			<div className="projectBox__content">
				<h4>{title}</h4>
				<p>{children}</p>
				<div className="projectBox__skills">
					{skills.map(skill => (
						<Skill key={skill.text} icon={skill.image} text={skill.title} />
					))}
				</div>
			</div>
		</a>
	)
}

export default ProjectBox
