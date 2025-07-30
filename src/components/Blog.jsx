import BlogCard from './addons/BlogCard'
import Section from './Section'

import pseudocodeImage from '../assets/imgs/blogs/pseudocode.jpg'
import firstScreen from '../assets/imgs/blogs/firstScreen.jpg'
import secondScreen from '../assets/imgs/blogs/secondScreen.jpg'
import summer from '../assets/imgs/blogs/summer.jpg'
import editing from '../assets/imgs/blogs/editing.jpg'

const Blog = () => {
	return (
		<Section title="Blog" className="blog" id="blog">
			<BlogCard
				date="30/07/2025"
				title="Od pomysłu do programu: rola pseudokodu"
				image={pseudocodeImage}
				href="www.google.com"
				isMain={true}>
				Zanim powstanie pierwsza linijka kodu, warto napisać coś, co wygląda jak kod, ale nim nie jest. Pseudokod to
				świetne narzędzie do planowania algorytmów, komunikowania pomysłów i… oszczędzania sobie nerwów.
			</BlogCard>
			<div className="blog__container">
				<BlogCard date="29/07/2025" title="Gdzie polecieć na wakacje?" image={summer} href="www.google.com">
					Znudziły cię zatłoczone kurorty? Sprawdź ciekawe i mniej oczywiste kierunki na tegoroczne wakacje.
				</BlogCard>
				<BlogCard
					date="25/07/2025"
					title="Jak zabezpieczyć się przed SQL Injection"
					image={secondScreen}
					href="www.google.com">
					Dowiedz się, jak działa SQL Injection i jak prostymi metodami możesz zabezpieczyć swoją aplikację przed
					atakiem.
				</BlogCard>
				<BlogCard date="22/07/2025" title="Jak zmontować dobrze film?" image={editing} href="www.google.com">
					Poznaj podstawy montażu wideo — od wyboru ujęć, przez cięcia, po budowanie rytmu i klimatu materiału.
				</BlogCard>
				<BlogCard
					date="21/07/2025"
					title="Jaki język programowania najlepszy dla początkujących?"
					image={firstScreen}
					href="www.google.com">
					Zastanawiasz się, od czego zacząć naukę kodowania? Porównujemy najpopularniejsze języki i ich zastosowania.
				</BlogCard>
			</div>
		</Section>
	)
}

export default Blog
