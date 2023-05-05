import React from "react";

import PostCard from "../components/PostCard";
import TopicPageHeader from "../components/TopicPageHeader";
import styles from "../styles/topics.module.css";

const Topics = (props) => {
    return (
        <div className={styles["topics-wrapper"]}>
            <TopicPageHeader topic={props.topic} />
            <div className={styles["topic-post__wrapper"]}>
                <div className={styles["blogs_main"]}>
                    {props.topicBlogs.length !== 0 && <ol className={styles["blog__list"]}>
                        {props.topicBlogs.map((blog) => (
                            <li key={Math.random()}>
                                <PostCard post={blog} />
                            </li>
                        ))}
                    </ol>}
                    {props.topicBlogs.length === 0 && <p className={styles['no-posts']}>No Posts Yet</p>}
                </div>
            </div>
        </div>
    );
};

export default Topics;
