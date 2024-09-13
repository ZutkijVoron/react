import React from "react";

const UISelect = ({ options, defaultValue, _value, _onChange }) => {
	return (
		<select value={_value} onChange={(e) => _onChange(e.target.value)}>
			<option value="" disabled>
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default UISelect;
