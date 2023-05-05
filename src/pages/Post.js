import React from "react";
import { marked } from "marked";
import "prismjs/themes/prism.css";

import "../styles/code.css";
import PostHeader from "../components/PostHeader";
import styles from "../styles/post.module.css";

const Post = (props) => {
    return (
        <div className={styles["post-page__wrapper"]}>
            <PostHeader topic={props.topic} />
            <div className={styles["blog-main__wrapper"]}>
                <div className={styles["blog-wrapper"]}>
                    <h2 className={styles["blog-title"]}>{props.post.title}</h2>
                    <div className={styles["blog-meta"]}>{props.post.date}</div>
                    <div className={styles["blog-main__content"]}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: marked(props.post.body),
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
