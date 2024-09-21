import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import UIButton from '../components/ui/button/UIButton'
import UILoader from '../components/ui/loader/UILoader'
import UIModal from '../components/ui/modal/UIModal'
import UIPagination from '../components/ui/pagination/UIPagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import { getPageCount } from '../utils/Pages'
import { useObserver } from '../hooks/useObserver'
import UISelect from '../components/ui/select/UISelect'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const lastElement = useRef(null)

	const [fetchPosts, isPostLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page)
			setPosts([...posts, ...response.data] as never[])
			setTotalPages(getPageCount(response.headers['x-total-count'], limit))
		}
	)
	const sortedAndSelectedPost = usePosts(posts, filter.sort, filter.query)

	const createPost = (newPost: any) => {
		setPosts([newPost, ...posts] as never[])
		setModal(false)
	}
	const removePost = (id: number) =>
		setPosts(posts.filter((p: { id: any }) => p.id !== id))
	const changePage = async (p: number) => {
		setPage(p)
	}

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

	return (
		<div className='App'>
			<UIButton onClick={() => setModal(true)}>Create Post</UIButton>
			<UIModal show={modal} setShow={setModal}>
				<PostForm create={createPost} />
			</UIModal>
			<PostFilter filter={filter} setFilter={setFilter} />
			<UISelect
				value={limit}
				_onChange={value => setLimit(+value)}
				defaultValue={'count elements on page'}
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'all' },
				]}
			/>
			{postError && <h1> Error {postError}</h1>}
			{isPostLoading && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<UILoader />
				</div>
			)}
			<PostList
				remove={removePost}
				posts={sortedAndSelectedPost}
				title='Post list'
			/>
			<div ref={lastElement} style={{}}></div>
			<UIPagination
				posts={posts}
				totalPages={totalPages}
				changePage={changePage}
				page={page}
			/>
		</div>
	)
}

export default Posts
