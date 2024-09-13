import React from 'react'
import classes from './UIModal.module.css'

const UIModal = ({ children, show, setShow }) => {
	const rootClasses = [classes.modal]
	if (show) rootClasses.push(classes.active)

	return (
		<div className={rootClasses.join(' ')} onMouseUp={() => setShow(false)}>
			<div
				className={classes.modal__content}
				onMouseUp={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default UIModal
