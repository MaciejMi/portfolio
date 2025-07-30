import '../../assets/components.scss'

const Dialog = ({ text, onClose }) => {
	return (
		<dialog open className="dialog">
			<p>{text}</p>
			<form method="dialog">
				<button onClick={onClose}>OK</button>
			</form>
		</dialog>
	)
}

export default Dialog
