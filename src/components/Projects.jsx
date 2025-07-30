import Section from './Section'
import ProjectBox from './addons/ProjectBox'

import saveYourTaskIcon from '../assets/imgs/projects/saveyourtask.png'
import warEchoesIcon from '../assets/imgs/projects/warechoes.png'
import rockPaperScissorsIcon from '../assets/imgs/projects/rps.png'
import roadIcon from '../assets/imgs/projects/road.png'
import pkIcon from '../assets/imgs/projects/pk.png'

// ICONS
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
import ejsIcon from '../assets/imgs/skills/ejs.png'

const Projects = () => {
	return (
		<Section title="Projekty" className="projects" id="projects">
			<div className="projects__container">
				<ProjectBox
					title="Save Your Task"
					image={saveYourTaskIcon}
					skills={[
						{ title: 'HTML', image: htmlIcon },
						{ title: 'CSS', image: cssIcon },
						{ title: 'MySQL', image: mysqlIcon },
						{ title: 'JavaScript', image: jsIcon },
						{ title: 'PHP', image: phpIcon },
					]}
					link="https://github.com/MaciejMi/Save-Your-Tasks">
					Aplikacja internetowa służąca zapisywaniu w kalendarzu zadań do zrobienia. Można w niej dodawać zadania,
					wybierać kategorie oraz edytować je i usuwać.
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
