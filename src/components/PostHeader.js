import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/post.module.css";

const PostHeader = (props) => {
    return (
        <header className={styles["post-header__wrapper"]}>
            <div className={styles["topic-link__wrapper"]}>
                <NavLink
                    to={`/${props.topic.toLowerCase()}`}
                    className={styles["topic-link"]}
                >
                    {`< Goto /${props.topic.toLowerCase()}`}
                </NavLink>
            </div>
        </header>
    );
};

export default PostHeader;
