import '../../assets/components.scss'

const BlogCard = ({ children, title, date, image, href, isMain = false }) => {
	return (
		<a href={href} className={isMain ? 'blogCard blogCard--main' : 'blogCard'}>
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
	)
}

export default BlogCard
