import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/PostInput/AddPost";
import Posts from "./components/Posts/Posts";

function App() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchPostsHandler = useCallback(async () => {
		setError(null);
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app/Posts.json"
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const data = await response.json();

			const loadedPosts = [];
			for (const key in data) {
				loadedPosts.push({
					id: key,
					title: data[key].title,
					description: data[key].description,
					date: data[key].date,
				});
			}
			setPosts(loadedPosts);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading((prevState) => !prevState);
	}, []);

	useEffect(() => {
		fetchPostsHandler();
	}, [fetchPostsHandler]);

	const addPostHandler = async (post) => {
		await fetch(
			"https://react-http-91fc5-default-rtdb.europe-west1.firebasedatabase.app/Posts.json",
			{
				method: "POST",
				body: JSON.stringify(post),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
	};

	return (
		<>
			<AddPost onAddPostHandler={addPostHandler} />
			<Posts items={posts} onError={error} onLoading={isLoading} />
		</>
	);
}

export default App;
