import React from 'react'

const Modal = ({ isOpen, onClose, emailData }) => {
	return (
		<div className={`modal ${isOpen ? 'active' : ''}`}>
			<div className="overflow" onClick={() => onClose(false)}>
				<div className="modal-dialog">
					<button onClick={() => onClose(false)}>&times;</button>

					<h2>{emailData.message}</h2>
					<p>We will call you back later.</p>
				</div>
			</div>
		</div>
	)
}

export default Modal
