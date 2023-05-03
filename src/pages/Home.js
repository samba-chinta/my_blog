import React from "react";

import Header from "../components/Header";
import OptionCard from "../components/OptionCard";
import PostCard from "../components/PostCard";
import styles from "../styles/home.module.css";

const options = ["DSA", "React", "JavaScript", "My Stories"];

const Home = (props) => {
    return (
        <>
            <Header />
            <div className={styles["language-opt__wrappers"]}>
                <div className={styles['options-wrapper']}>
                    <ol className={styles["option-list"]}>
                        {options.map((opt) => (
                            <li key={Math.random()}>
                                <OptionCard optionName={opt} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className={styles["recent-posters__wrapper"]}>
                <div className={styles["recent-posters__main"]}>
                    <h1 className={styles['div-title']}>Recent Posts:</h1>
                    <ol className={styles["recent-posts__list"]}>
                        {props.recentPosts.map(post => (
                            <li key={Math.random()}>
                                <PostCard post={post}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Home;
