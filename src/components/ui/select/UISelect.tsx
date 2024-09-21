import React, { SelectHTMLAttributes } from 'react'

interface Option {
	value: string | number
	name: string
}

interface UISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: Option[]
	defaultValue: string
	value: string | number
	_onChange: (value: string) => void
}

const UISelect: React.FC<UISelectProps> = ({
	options,
	defaultValue,
	value,
	_onChange,
}) => {
	return (
		<select value={value} onChange={e => _onChange(e.target.value)}>
			<option value='' disabled>
				{defaultValue}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default UISelect
