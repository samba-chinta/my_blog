import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";

const TopicPageHeader = (props) => {
    return (
        <header className={styles["blog-header__wrapper"]}>
            <div className = {styles["blog-header"]}>
                <div className={styles["blog-title__wrapper"]}>
                    <h4 className={styles["blog-title"]}>{ props.topic }</h4>
                </div>
                <div className={styles["portfolio-link__wrapper"]}>
                    <NavLink
                        to="/"
                        className={styles["portfolio-link"]}
                    >
                        Home
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default TopicPageHeader;
