import '../assets/header.scss'

import profileImage from '../assets/imgs/profile.jpeg'
import ProfileCircle from './addons/ProfileCircle'

const Header = () => {
	return (
		<header className="header">
			<div className="wrapper">
				<ProfileCircle
					image={profileImage}
					alt="Maciej w niebieskim garniturze oparty o naczepę ciężarówki, z założonymi rękami i wyprostowaną postawą, patrzący w dal "
					isOnline={true}
				/>
			</div>
		</header>
	)
}

export default Header
