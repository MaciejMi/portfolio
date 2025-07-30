const Button = ({ text, isOutline, href }) => {
	return (
		<a href={href} className={isOutline ? 'button button--outline' : 'button'}>
			{text}
		</a>
	)
}

export default Button
