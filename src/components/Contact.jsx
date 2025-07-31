import Section from './Section'
import '../assets/section.scss'

import Dialog from './addons/Dialog'

import contactImage from '../assets/imgs/contact.jpg'

import SectionImage from './addons/SectionImage'
import githubIcon from '../assets/imgs/github.svg'
import linkedinIcon from '../assets/imgs/linkedin.svg'
import discordIcon from '../assets/imgs/discord.svg'
import xIcon from '../assets/imgs/x.svg'
import { useState } from 'react'

const Contact = () => {
	const [isDialogOpen, setDialogOpen] = useState(false)
	return (
		<>
			<Section title="Kontakt" className="contact" id="contact">
				<div className="contact__container">
					<div className="contact__left">
						<h3>Współpracujmy!</h3>
						<p>Szukasz drogi kontaktu? Pisz tutaj śmiało! </p>
						<div className="contact__social-media">
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
						<form>
							<input type="text" placeholder="Imię" required />
							<input type="text" placeholder="Email" required />
							<textarea placeholder="Cześć, chciałem napisać w sprawię... " rows="4" required></textarea>
							<button className="button button--outline" onClick={() => setDialogOpen(true)}>
								Wyślij
							</button>
						</form>
					</div>
					<SectionImage
						image={contactImage}
						alt="Zespół trzymających dyplomy i upominki stoi na tle ścianki Politechniki Świętokrzyskiej wraz z przedstawicielami uczelni. Zdjęcie wykonane podczas uroczystości wręczenia nagród i dyplomów"
					/>
				</div>
			</Section>
			{isDialogOpen && (
				<Dialog
					text="Obecnie formularz jest w wersji demonstracyjnej. W celu kontaktu polecam LinkedIn i Discord"
					onClose={() => setDialogOpen(false)}
				/>
			)}
		</>
	)
}

export default Contact
