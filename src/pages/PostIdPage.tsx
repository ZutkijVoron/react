import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import UILoader from '../components/ui/loader/UILoader'
import classes from '../styles/PostPage.module.css'

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({ id: -1, title: 'loading' })
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async id => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComments, isCommentsLoading, errorComments] = useFetching(
		async id => {
			const response = await PostService.getCommentsById(id)
			setComments(response.data)
		}
	)

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div className={classes.post}>
			{isLoading ? (
				<UILoader />
			) : (
				<div className={classes.post__title}>
					{post.id}. {post.title}
				</div>
			)}
			{isCommentsLoading ? (
				<UILoader />
			) : (
				<div className={classes.post__comments}>
					{comments.map((e: { id: number; email: string; body: string }) => (
						<div key={e.id} className={classes.post__comments__item}>
							<div className={classes.post__comments__item__email}>
								{e.email}
							</div>
							<div className={classes.post__comments__item__body}>{e.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PostIdPage
