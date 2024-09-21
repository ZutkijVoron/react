import { MutableRefObject, useEffect, useRef } from 'react'

export const useObserver = (
	ref: MutableRefObject<any>,
	canLoad: boolean,
	isLoading: boolean,
	foo: { (): void }
) => {
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		if (isLoading) return
		if (observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && canLoad) {
				foo()
			}
		})
		observer.current.observe(ref.current)
	}, [isLoading])
}
