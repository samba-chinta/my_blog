import React from "react";
import { Link } from "react-router-dom"
import styles from "../styles/postcard.module.css";
import Card from "./ui/Card";

const PostCard = (props) => {
    return (
        <Card className={styles["post-card__wrapper"]}>
            <div className={styles["post-logo"]}>
                <h2>{props.post.title[0]}</h2>
            </div>
            <div className={styles["post-details"]}>
                <Link className={styles["post-title"]}>{props.post.title}</Link>
                <p className={styles["post-description"]}>{props.post.description}</p>
                <div className={styles["post-meta__wrapper"]}>
                    <p>{props.post.relatedTo}</p>
                    <p>{props.post.date}</p>
                    <button className={styles['read-btn']}>Read</button>
                </div>
            </div>
        </Card>
    );
};

export default PostCard;
