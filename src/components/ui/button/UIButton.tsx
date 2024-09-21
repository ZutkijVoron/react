import React, {
	ReactElement,
	ReactNode,
	ButtonHTMLAttributes,
	ClassAttributes,
} from 'react'
import classes from './UIButton.module.css'

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode | ReactNode[]
	className?: string
}

const UIButton: React.FC<UIButtonProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<button {...props} className={[classes.btn, className].join(' ')}>
			{children}
		</button>
	)
}

export default UIButton
