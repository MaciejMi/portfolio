const Button = ({ text, isOutline }) => {
	return (
		<a href="" className={isOutline ? 'button button--outline' : 'button'}>
			{text}
		</a>
	)
}

export default Button
