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
				<div className="header__content">
					<h1>Maciej Michalczyk</h1>
					<h2>Full-Stack Developer</h2>
					<p>
						<i class="ti ti-map-pin"></i> Kielce, Polska
					</p>
					<p>
						Tworzę <span>aplikacje internetowe</span> w <span>React.js</span> i <span>Express.js</span>.
					</p>
				</div>
			</div>
		</header>
	)
}

export default Header
