import { useState } from 'react'
import '../../assets/components.scss'
import Dialog from './Dialog'

const BlogCard = ({ children, title, date, image, href, isMain = false }) => {
	const [isDialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<a onClick={() => setDialogOpen(true)} className={isMain ? 'blogCard blogCard--main' : 'blogCard'}>
				<div className="blogCard__content">
					<p className="blogCard__date">{date}</p>
					<h4>{title}</h4>
					<p className="blogCard__description">{children}</p>
					<p className="blogCard__link" href={href}>
						Chcesz więcej informacji? Zacznij czytać artykuł →
					</p>
				</div>
				<div className="blogCard__image">
					<img src={image} alt={title} />
				</div>
			</a>

			{isDialogOpen && (
				<Dialog text="Obecnie blog jest w wersji demonstracyjnej" onClose={() => setDialogOpen(false)} />
			)}
		</>
	)
}

export default BlogCard
