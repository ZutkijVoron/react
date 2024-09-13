import React from 'react'
import classes from './UINutton.module.css'

const UIButton = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[classes.btn, className].join(' ')}>
			{children}
		</button>
	)
}

export default UIButton
