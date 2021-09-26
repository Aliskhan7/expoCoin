import React from 'react'

const Modal = ({ isOpen, onClose, emailData }) => {
	return (
		<div className={`modal ${isOpen ? 'active' : ''}`}>
			<div className="overflow" onClick={() => onClose(false)}>
				<div className="modal-dialog">
					<button onClick={() => onClose(false)}>&times;</button>
					<p>Мы Вам перезвоним в ближайшее время</p>
				</div>
			</div>
		</div>
	)
}

export default Modal
