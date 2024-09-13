import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/PostItem.css'
import UIButton from './ui/button/UIButton'

const PostItem = forwardRef(({remove, post, ...props }, ref) => {
	const router = useNavigate()

	return (
		<div className='post' ref={ref}>
			<div className='post__content'>
				<h2 className='post__content__title'>
					{post?.id}. {post?.title}
				</h2>
				<div className='post__content__text'>{post?.body}</div>
			</div>
			<div className='post__controls'>
				<UIButton
					className='post__controls__btn'
					onClick={() => router(`/posts/${post.id}`)}
				>
					open
				</UIButton>
				<UIButton className='post__controls__btn' onClick={() => remove(post)}>
					delet
				</UIButton>
			</div>
		</div>
	)
})

export default PostItem
