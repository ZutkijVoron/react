import React, { InputHTMLAttributes } from 'react'

import classes from './UIInput.module.css'

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const UIInput: React.FC<UIInputProps> = props => {
	return <input className={classes.input} {...props} />
}

export default UIInput
