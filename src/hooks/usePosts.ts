import { useMemo } from 'react'

export const useSortedPosts = (posts: any[], sort: string) => {
	const sortedPost = useMemo(() => {
		if (sort) return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		return posts
	}, [sort, posts])

	return sortedPost
}

export const usePosts = (posts: any[], sort: string, query: string) => {
	const sortedPost = useSortedPosts(posts, sort)

	const sortedAndSelectedPost = useMemo(
		() =>
			sortedPost.filter(p =>
				p.title.toLowerCase().includes(query.toLowerCase())
			),
		[query, sortedPost]
	)

	return sortedAndSelectedPost
}
