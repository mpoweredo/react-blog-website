import classes from "./PostItem.module.css";
import Card from "../UI/Card";

const PostItem = (props) => {
	return (
		<Card className={classes['postitem-wrapper']}>
			<li className={classes.post}>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
                <p className={classes.date}>{props.date}</p>
			</li>
		</Card>
	);
};

export default PostItem;
