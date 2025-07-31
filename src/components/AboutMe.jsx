import Section from './Section'
import SectionImage from './addons/SectionImage'
import aboutmeImage from '../assets/imgs/aboutme.jpeg'
import Skill from './addons/Skill'

import htmlIcon from '../assets/imgs/skills/html.png'
import cssIcon from '../assets/imgs/skills/css.png'
import sassIcon from '../assets/imgs/skills/sass.png'
import reactIcon from '../assets/imgs/skills/react.png'
import expressIcon from '../assets/imgs/skills/express.png'
import mysqlIcon from '../assets/imgs/skills/mysql.png'
import phpIcon from '../assets/imgs/skills/php.png'
import jsIcon from '../assets/imgs/skills/javascript.png'
import pythonIcon from '../assets/imgs/skills/python.png'
import javaIcon from '../assets/imgs/skills/java.png'
import cppIcon from '../assets/imgs/skills/cpp.png'
import gitIcon from '../assets/imgs/skills/git.png'
import photoshopIcon from '../assets/imgs/skills/photoshop.png'
import premiereIcon from '../assets/imgs/skills/premiere.png'
import Aos from 'aos'

const AboutMe = () => {
	return (
		<Section title="O mnie" className="aboutme" id="aboutme">
			<div className="aboutme__top">
				<SectionImage
					image={aboutmeImage}
					alt="Maciej trzymający szalik z napisem 'Repubblica di San Marino' na tle uliczki w San Marino."
				/>
				<div className="aboutme__description">
					<p>
						Jestem początkującym <span>fullstack developerem</span> z Polski, który uczy się przez działanie. Najwięcej
						radości sprawia mi pisanie <span>czytelnego kodu</span> i <span>rozwiązywanie problemów</span> - dlatego
						tworzę sporo własnych projektów, które pomagają mi rozwijać umiejętności.
					</p>
					<p>
						Na co dzień pracuję z <span>Reactem i Expressem</span>. Znam też podstawy <span>Pythona, Javy i C++</span>.
						Poza programowaniem interesuję się grafiką i montażem filmów – korzystam z{' '}
						<span>Photoshopa i Premiere Pro</span>.
					</p>
					<p>
						Najbardziej motywuje mnie możliwość zamiany pomysłu w coś <span>realnego</span>. Uczę się na bieżąco i
						rozwijam portfolio projekt po projekcie. To dopiero początek, ale idę po więcej.
					</p>
					<p>
						Brzmi ciekawie? &nbsp;
						<a href="#contact">
							<span>Napisz do mnie!</span>
						</a>
					</p>
				</div>
			</div>
			<div className="aboutme__bottom">
				<h3>Technologie</h3>
				<div className="aboutme__skills">
					<Skill icon={htmlIcon} text="HTML" />
					<Skill icon={cssIcon} text="CSS" />
					<Skill icon={sassIcon} text="SASS" />
					<Skill icon={reactIcon} text="React" />
					<Skill icon={expressIcon} text="Express" />
					<Skill icon={mysqlIcon} text="MySQL" />
					<Skill icon={phpIcon} text="PHP" />
					<Skill icon={jsIcon} text="JavaScript" />
					<Skill icon={pythonIcon} text="Python" />
					<Skill icon={javaIcon} text="Java" />
					<Skill icon={cppIcon} text="C++" />
					<Skill icon={gitIcon} text="Git" />
					<Skill icon={photoshopIcon} text="Photoshop" />
					<Skill icon={premiereIcon} text="Premiere Pro" />
				</div>
			</div>
		</Section>
	)
}

export default AboutMe
