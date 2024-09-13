import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<div className="counter__value">{count}</div>
			<div className="counter__control">
				<button
					onClick={() => setCount(count + 1)}
					className="counter__control__btn"
				>
					like
				</button>
				<button
					onClick={() => setCount(count - 1)}
					className="counter__control__btn"
				>
					dislike
				</button>
			</div>
		</div>
	);
};

export default Counter;
