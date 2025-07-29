import '../../assets/components.scss'

const ProfileCircle = ({ image, isOnline, alt }) => {
	return (
		<div className="profile_circle">
			<img src={image} alt={alt} />
			<div className={isOnline ? 'status online' : 'status offline'}></div>
		</div>
	)
}

export default ProfileCircle
