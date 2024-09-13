import React from "react";
import UIInput from "./ui/input/UIInput";
import UISelect from "./ui/select/UISelect";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<UIInput
				placeholder={"search post"}
				value={filter.queri}
				onChange={(e) => setFilter({ ...filter, queri: e.target.value })}
			/>
			<UISelect
				value={filter.sort}
				_onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue={"sort"}
				options={[
					{ value: "title", name: "sort for title" },
					{ value: "body", name: "sort for description" },
				]}
			/>
		</div>
	);
};

export default PostFilter;
