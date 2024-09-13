import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
	const sortedPost = useMemo(() => {
		if (sort) return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		return posts
	}, [sort, posts])

	return sortedPost
}

export const usePosts = (posts, sort, queri) => {
	const sortedPost = useSortedPosts(posts, sort)

	const sortedAndSelectedPost = useMemo(
		() =>
			sortedPost.filter(p =>
				p.title.toLowerCase().includes(queri.toLowerCase())
			),
		[queri, sortedPost]
	)

	return sortedAndSelectedPost
}
