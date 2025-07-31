import '../../assets/components.scss'

const SectionImage = ({ image, alt }) => {
	return (
		<div className="image_box">
			<img src={image} alt={alt} className="image" />
		</div>
	)
}

export default SectionImage
