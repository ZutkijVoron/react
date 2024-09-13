import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, foo) => {
	const observer = useRef();

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && canLoad) {
				foo()
			}
		});
		observer.current.observe(ref.current);
	}, [isLoading]);
};
