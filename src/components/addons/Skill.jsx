import '../../assets/components.scss'

const Skill = ({ icon, text }) => {
	return (
		<div className="skill">
			<img src={icon} alt={text} /> <span>{text}</span>
		</div>
	)
}

export default Skill
