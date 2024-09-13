import React, {useState} from "react";
import UIInput from "./ui/input/UIInput";
import UIButton from "./ui/button/UIButton";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: "", body: "" });

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = { id: Date.now(), ...post };
		create(newPost);
		setPost({ title: "", body: "" });
	};

	return (
		<form>
			<UIInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="post title"
			/>
			<UIInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder="post body"
			/>
			<UIButton onClick={addNewPost}>Create Post</UIButton>
		</form>
	);
};

export default PostForm;
