import ExperienceCard from './addons/ExperienceCard'
import Section from './Section'

import espaniaFlag from '../assets/imgs/countries/es.png'
import polishFlag from '../assets/imgs/countries/pl.png'

import forjaRojaCompanyIcon from '../assets/imgs/companies/forjaroja.jpeg'
import walasekIcon from '../assets/imgs/companies/walasek.jpeg'
import zsiIcon from '../assets/imgs/companies/zsi.png'

const Experience = () => {
	return (
		<Section title="Doświadczenie" className="experience" id="experience">
			<div className="experience__container">
				<ExperienceCard
					title="Stażysta"
					company="Forja Roja"
					location="Malaga, Hiszpania"
					dates="23/06/2025 - 04/06/2025"
					image={forjaRojaCompanyIcon}
					countryIcon={espaniaFlag}
					countryAlt="Spain">
					Tworzyłem strony i sklepy internetowe w WordPressie oraz współpracowałem w środowisku międzynarodowym.
				</ExperienceCard>
				<ExperienceCard
					title="Praktykant"
					company="Walasek Informatyka™"
					location="Kielce, Polska"
					dates="02/09/2024  - 27/09/2024 oraz 26/02/2024 - 22/03/2024"
					image={walasekIcon}
					countryIcon={polishFlag}
					countryAlt="Poland">
					Rozwijałem aplikacje internetowe w React.js i Express.js oraz pracowałem z wzorcem MVC w realnych projektach.{' '}
				</ExperienceCard>
				<ExperienceCard
					title="Stażysta"
					company="Zespół Szkół Informatycznych im. gen. Józefa Hauke Bosaka"
					location="Kielce, Polska"
					dates="01/09/2021 - 24/04/2026"
					image={zsiIcon}
					countryIcon={polishFlag}
					countryAlt="Poland">
					Nauczyłem się tworzyć swoje pierwsze strony internetowe w HTML, CSS, JavaScript, React, a także działać z PHP
					czy Express.js. Pondato zdobyłem podstawowe umiejętności w Pythonie, Javie i C++.
				</ExperienceCard>
			</div>
		</Section>
	)
}

export default Experience
