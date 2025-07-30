import '../assets/header.scss'

import profileImage from '../assets/imgs/profile.jpeg'
import ProfileCircle from './addons/ProfileCircle'
import githubIcon from '../assets/imgs/github.svg'
import linkedinIcon from '../assets/imgs/linkedin.svg'
import discordIcon from '../assets/imgs/discord.svg'
import xIcon from '../assets/imgs/x.svg'
import Button from './addons/Button'

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
					<div class="top">
						<h1>Maciej Michalczyk</h1>
						<h2>Full-Stack Developer</h2>
						<p className="header__location">
							<i class="ti ti-map-pin"></i> Kielce, Polska
						</p>
					</div>
					<p class="header__description">
						Tworzę <span>aplikacje internetowe</span> w <span>React.js</span> i <span>Express.js</span>.
					</p>
					<div className="header__social-media">
						<a href="https://github.com/MaciejMi" target="_blank">
							<img src={githubIcon} alt="Github icon" />
						</a>
						<a href="https://www.linkedin.com/in/maciej-michalczyk/" target="_blank">
							<img src={linkedinIcon} alt="Linkedin icon" />
						</a>
						<a href="https://x.com/maciej_dev" target="_blank">
							<img src={xIcon} alt="X icon" />
						</a>
						<a href="https://discord.gg/F8WhdJ8abj" target="_blank">
							<img src={discordIcon} alt="Discord icon" />
						</a>
					</div>
					<div className="header__buttons">
						<Button text="Projekty" href="#projects" />
						<Button text="Kontakt" isOutline={true} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
