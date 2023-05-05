import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/postcard.module.css";
import Card from "./ui/Card";

const PostCard = (props) => {
    const postAccessLink = `/${props.post.tag.toLowerCase()}/${props.post.title
        .toLowerCase()
        .split(" ")
        .join("-")}`;

    return (
        <Card className={styles["post-card__wrapper"]}>
            <div className={styles["post-logo"]}>
                <h2>{props.post.title[0]}</h2>
            </div>
            <div className={styles["post-details"]}>
                <Link className={styles["post-title"]} to={postAccessLink}>
                    {props.post.title}
                </Link>
                <p className={styles["post-description"]}>
                    {props.post.description}
                </p>
                <div className={styles["post-meta__wrapper"]}>
                    <p>{props.post.tag}</p>
                    <p>{props.post.date}</p>
                    <Link
                        className={styles["read-post__btn"]}
                        to={postAccessLink}
                    >
                        Read
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default PostCard;
