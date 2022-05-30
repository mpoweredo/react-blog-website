import { useState } from "react";
import Card from "../UI/Card";

import classes from "./AddPost.module.css";

const AddPost = (props) => {
	const [postTitle, setPostTitle] = useState("");
	const [postDescription, setPostDescription] = useState("");
	const [postTitleError, setPostTitleError] = useState(null);
	const [postDescriptionError, setPostDescriptionError] = useState(null);

	const titleChangeHandler = (event) => {
		setPostTitle(event.target.value);
	};

	const descriptionChangeHandler = (event) => {
		setPostDescription(event.target.value);
	};



	const AddPost = (event) => {
		event.preventDefault();

		// CHECKING IF THE INPUTS ARE CORRECT

		if (postTitle.trim().length < 3) {
			setPostTitleError("Title must be atleast 3 letter long");
		} else {
			setPostTitleError(null);
		}

		if (postDescription.trim().length < 10) {
			setPostDescriptionError("Description must be atleast 10 letter long");
		} else {
			setPostDescriptionError(null);
		}

		// PREVENTING FROM CODE EXECUTION WHEN ONE OF INPUTS ARE NOT VALID

		if (postTitle.trim().length < 3 || postDescription.trim().length < 10) {
			return;
		}

		const newPost = {
			title: postTitle,
			description: postDescription,
			date: new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}),
		}
		
		props.onAddPostHandler(newPost)
		
		setPostTitle("");
		setPostDescription("");
	};

	return (
		<Card className={classes["form-wrapper"]}>
			<form className={classes["create-post-input"]} onSubmit={AddPost}>
				<div>
					<label htmlFor="post-title">Post title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						placeholder="Post title"
						id="post-title"
						value={postTitle}
					/>
					{postTitleError && <p className={classes.error}>{postTitleError}</p>}
				</div>
				<div>
					<label htmlFor="post-description">
						A description of your post
					</label>
					<textarea
						type="text"
						alt="text"
						onChange={descriptionChangeHandler}
						placeholder="What are you thinking about..."
						id="post-description"
						value={postDescription}
					></textarea>
					{postDescriptionError && (
						<p className={classes.error}>{postDescriptionError}</p>
					)}
				</div>
				<button type="submit" >
					Add post
				</button>
			</form>
		</Card>
	);
};

export default AddPost;
