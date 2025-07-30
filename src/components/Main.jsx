import Section from './Section'
import SectionImage from './addons/SectionImage'
import aboutmeImage from '../assets/imgs/aboutme.jpeg'

const Main = () => {
	return (
		<main>
			<Section title="O mnie" className="aboutme">
				<div className="aboutme__top">
					<SectionImage
						image={aboutmeImage}
						alt="Maciej trzymający szalik z napisem 'Repubblica di San Marino' na tle uliczki w San Marino."
					/>
					<div className="aboutme__description">
						<p>
							Jestem początkującym <span>fullstack developerem</span> z Polski, który uczy się przez działanie.
							Najwięcej radości sprawia mi pisanie <span>czytelnego kodu</span> i <span>rozwiązywanie problemów</span> -
							dlatego tworzę sporo własnych projektów, które pomagają mi rozwijać umiejętności.
						</p>
						<p>
							Na co dzień pracuję z <span>Reactem i Expressem</span>. Znam też podstawy <span>Pythona, Javy i C++</span>
							. Poza programowaniem interesuję się grafiką i montażem – korzystam z{' '}
							<span>Photoshopa i Premiere Pro</span>.
						</p>
						<p>
							Najbardziej motywuje mnie możliwość zamiany pomysłu w coś <span>realnego</span>. Uczę się na bieżąco i
							rozwijam portfolio projekt po projekcie. To dopiero początek, ale idę po więcej.
						</p>
						<p>
							Jeśli to brzmi ciekawie –
							<a href="#kontakt">
								<span>zawsze możesz do mnie napisać</span>
							</a>
							.
						</p>
					</div>
				</div>
			</Section>
		</main>
	)
}

export default Main
