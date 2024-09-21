import React, { ReactElement, ReactNode } from 'react'
import classes from './UIModal.module.css'

interface UIModalProps {
	children: ReactNode | ReactNode[]
	show: boolean
	setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const UIModal: React.FC<UIModalProps> = ({ children, show, setShow }) => {
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
