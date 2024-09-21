import React from 'react'
import UIInput from './ui/input/UIInput'
import UISelect from './ui/select/UISelect'

interface filter {
	query: string
	sort: string
}

interface PostFilterProps {
	filter: filter
	setFilter: React.Dispatch<React.SetStateAction<filter>>
}

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
	return (
		<div>
			<UIInput
				placeholder={'search post'}
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<UISelect
				value={filter.sort}
				_onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue={'sort'}
				options={[
					{ value: 'title', name: 'sort for title' },
					{ value: 'body', name: 'sort for description' },
				]}
			/>
		</div>
	)
}

export default PostFilter
