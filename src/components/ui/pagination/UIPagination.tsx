import React from 'react'
import UIButton from '../button/UIButton'
import { usePagination } from '../../../hooks/usePagination'

interface UIPaginationProps {
	posts: any[]
	totalPages: number
	changePage: (p: number) => Promise<void>
	page: number
}

const UIPagination: React.FC<UIPaginationProps> = ({
	posts,
	totalPages,
	changePage,
	page,
}) => {
	const pagesArray = usePagination(posts, totalPages)

	return (
		<div className='page__wrapper'>
			{pagesArray?.map(p => (
				<UIButton
					onClick={changePage.bind(null, p)}
					className={p === page ? 'page__wrapper__current' : ''}
					key={p}
				>
					{p}
				</UIButton>
			))}
		</div>
	)
}

export default UIPagination
