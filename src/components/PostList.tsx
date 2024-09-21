import React, { createRef, RefObject } from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface PostListProps {
	posts: any[]
	title?: string
	remove: (id: number) => void
}

const PostList: React.FC<PostListProps> = ({
	posts,
	title = 'Post List',
	remove,
}) => {
	if (!posts.length)
		return <h1 style={{ textAlign: 'center' }}>Post don't search</h1>

	return (
		<div className='PostList'>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map(value => {
					const nodeRef = createRef()
					return (
						<CSSTransition
							key={value.id}
							nodeRef={nodeRef}
							timeout={500}
							classNames='post'
						>
							<PostItem ref={nodeRef} remove={remove} post={value} />
						</CSSTransition>
					)
				})}
			</TransitionGroup>
		</div>
	)
}

export default PostList
