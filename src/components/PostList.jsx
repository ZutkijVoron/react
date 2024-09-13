import React, { createRef } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title = "Post List", remove }) => {
	if (!posts.length)
		return <h1 style={{ textAlign: "center" }}>Post don't search</h1>;

	return (
		<div className="PostList">
			<h1 style={{ textAlign: "center" }}>{title}</h1>
			<TransitionGroup>
				{posts.map((value, index) => {
					const nodeRef = createRef(null);
					return (
						<CSSTransition
							key={value.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="post"
						>
							<PostItem
								ref={nodeRef}
								remove={remove}
								number={index + 1}
								post={value}
							/>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
