import Card from "../UI/Card";
import PostItem from "./PostItem";
import LoadingSkeleton from "./LoadingSkeleton";

import classes from "./Posts.module.css";

const Posts = (props) => {
	const posts = props.items;
	console.log(posts);

	const content = (
		<Card className={classes["postList-wrapper"]}>
            {props.onError && <p className={classes['post-error']}>{props.onError}</p>}
			<ul className={classes.postList}>
            {props.onLoading && <LoadingSkeleton />}
				{!props.onError && posts.map((post) => {
					return (
						<PostItem
							key={post.id}
							title={post.title}
							description={post.description}
							date={post.date}
						/>
					);
				})}
			</ul>
		</Card>
	);



	return (
        <div>
            {content}
        </div>
    );
};

export default Posts;
