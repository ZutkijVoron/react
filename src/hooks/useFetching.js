import { useState } from "react";

export const useFetching = (foo) => {
	const [isLoaging, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await foo(...args);
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	};
	return [fetching, isLoaging, error];
};
