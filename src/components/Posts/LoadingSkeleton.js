import Card from "../UI/Card";

import classes from "./LoadingSkeleton.module.css";

const LoadingSkeleton = () => {
	return (
			<Card className={classes["postList-wrapper"]}>
				<li className={classes["post-skeleton"]}>
					<div className={classes["skeleton-title"]}></div>
					<div className={classes["skeleton-description-one"]}></div>
					<div className={classes["skeleton-description-two"]}></div>
					<div className={classes["skeleton-description-three"]}></div>
					<div className={classes["skeleton-date"]}></div>
				</li>
                <li className={classes["post-skeleton"]}>
					<div className={classes["skeleton-title"]}></div>
					<div className={classes["skeleton-description-one"]}></div>
					<div className={classes["skeleton-description-two"]}></div>
					<div className={classes["skeleton-description-three"]}></div>
					<div className={classes["skeleton-date"]}></div>
				</li>
                <li className={classes["post-skeleton"]}>
					<div className={classes["skeleton-title"]}></div>
					<div className={classes["skeleton-description-one"]}></div>
					<div className={classes["skeleton-description-two"]}></div>
					<div className={classes["skeleton-description-three"]}></div>
					<div className={classes["skeleton-date"]}></div>
				</li>
                <li className={classes["post-skeleton"]}>
					<div className={classes["skeleton-title"]}></div>
					<div className={classes["skeleton-description-one"]}></div>
					<div className={classes["skeleton-description-two"]}></div>
					<div className={classes["skeleton-description-three"]}></div>
					<div className={classes["skeleton-date"]}></div>
				</li>
			</Card>
	);
};

export default LoadingSkeleton;
