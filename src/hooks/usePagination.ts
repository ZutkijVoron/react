import { useMemo } from 'react'

export const usePagination = (posts: any[], totalPages: number) => {
	const pagesArray = useMemo(() => {
		const res = []
		for (let i = 1; i <= totalPages; ++i) res.push(i)
		return res
	}, [totalPages, posts])

	return pagesArray
}
