import Section from './Section'
import ProjectBox from './addons/ProjectBox'

import warEchoesIcon from '../assets/imgs/projects/warechoes.png'
import rockPaperScissorsIcon from '../assets/imgs/projects/rps.png'
import roadIcon from '../assets/imgs/projects/road.png'
import sejmIcon from '../assets/imgs/projects/sejmbot.png'
import pkIcon from '../assets/imgs/projects/pk.png'

// ICONS
import sassIcon from '../assets/imgs/skills/sass.png'
import reactIcon from '../assets/imgs/skills/react.png'
import expressIcon from '../assets/imgs/skills/express.png'
import mysqlIcon from '../assets/imgs/skills/mysql.png'
import jsIcon from '../assets/imgs/skills/javascript.png'
import discordJSIcon from '../assets/imgs/skills/discordjs.png'
// import pythonIcon from '../assets/imgs/skills/python.png'
import javaIcon from '../assets/imgs/skills/java.png'
// import cppIcon from '../assets/imgs/skills/cpp.png'
// import gitIcon from '../assets/imgs/skills/git.png'
import photoshopIcon from '../assets/imgs/skills/photoshop.png'
import premiereIcon from '../assets/imgs/skills/premiere.png'
import ejsIcon from '../assets/imgs/skills/ejs.png'

const Projects = () => {
	return (
		<Section title="Projekty" className="projects" id="projects">
			<div className="projects__container">
				<ProjectBox
					title="SejmBot"
					image={sejmIcon}
					skills={[
						{ title: 'JavaScript', image: jsIcon },
						{ title: 'Discord.js', image: discordJSIcon },
					]}
					link="https://github.com/MaciejMi/sejmbot">
					Sejmbot to prosty bot Discordowy napisany w JavaScripcie, który integruje się z oficjalnym API Sejmu RP.
					Pozwala sprawdzać dane o posłach X kadencji, takie jak frekwencja i głosowania, oferuje ranking posłów oraz
					interaktywną grę zgadywankę.
				</ProjectBox>
				<ProjectBox
					title="War Echoes"
					image={warEchoesIcon}
					skills={[
						{ title: 'Express', image: expressIcon },
						{ title: 'EJS', image: ejsIcon },
						{ title: 'MySQL', image: mysqlIcon },
					]}
					link="https://github.com/MaciejMi/War-Echoes">
					Blog historyczny poświęcony II Wojnie Światowej. Jest to prosty CRUD stworzony w Express.js oraz EJS-ie. Można
					dodawać, usuwać, edytować posty.
				</ProjectBox>
				<ProjectBox
					title="Rock Papper Scissors"
					image={rockPaperScissorsIcon}
					skills={[
						{ title: 'React', image: reactIcon },
						{ title: 'SCSS', image: sassIcon },
					]}
					link="https://github.com/MaciejMi/Rock-Paper-Scissors">
					Prosta gra napisana w Reactie. Jest to klasyczne papier, kamień i nożyce. Użytkownik ma możliwość wyboru
					swojego ruchu i zgodnie z zasadami pokazuje się wynik.
				</ProjectBox>
				<ProjectBox
					title="Road"
					image={roadIcon}
					skills={[{ title: 'Java', image: javaIcon }]}
					link="https://github.com/MaciejMi/Road">
					Aplikacja napisana w Javie, której celem jest znalezienie najkrótszej śćieżki łączącej kropkę niebieską z
					czerwoną. Proste algorytmy grafowe.
				</ProjectBox>
				<ProjectBox
					title="Programistyczny Kącik"
					image={pkIcon}
					skills={[
						{ title: 'Adobe Photoshop', image: photoshopIcon },
						{ title: 'Adobe Premiere Pro', image: premiereIcon },
					]}
					link="https://www.youtube.com/@programistycznykacik">
					Kanał tworzony przez trójkę przyjaciół, w którym tworzyłem miniaturki do filmów oraz montowałem filmy.
				</ProjectBox>
			</div>
		</Section>
	)
}

export default Projects
