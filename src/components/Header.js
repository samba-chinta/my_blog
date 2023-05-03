import React from "react";

import styles from "../styles/header.module.css";

const Header = (props) => {
    return (
        <header className={styles["blog-header__wrapper"]}>
            <div className = {styles["blog-header"]}>
                <div className={styles["blog-title__wrapper"]}>
                    <h4 className={styles["blog-title"]}>Lerner</h4>
                </div>
                <div className={styles["portfolio-link__wrapper"]}>
                    <a
                        href="https://siva-chinta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles["portfolio-link"]}
                    >
                        My Portfolio
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
