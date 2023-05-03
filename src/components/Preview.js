import React from "react";
import { marked } from "marked";
import 'prismjs/themes/prism.css';
import "../styles/code.css";

import classes from "../styles/preview.module.css";

const Preview = (props) => {
    return (
        <div className={classes["preview-wrapper"]}>
            <h1 className={classes["blog-title"]}>{props.title}</h1>
            <p className={classes["meta"]}>{`${props.tag} | ${props.date}`}</p>
            <hr/>
            <div className={classes["main-content"]}>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(props.input) }}
                />
            </div>
        </div>
    );
};

export default Preview;
