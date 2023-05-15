import React, { useRef, useState } from "react";
import { ref, push } from "firebase/database";
import database from "../config/config";

import styles from "../styles/editor.module.css";

import Preview from "../components/Preview";

/**
<pre class="language-javascript">
// Your JavaScript code here
</pre>
 */

const MarkupEditor = (props) => {
    const blogTitle = useRef("");
    const blogDescription = useRef("");
    const blogBody = useRef("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [input, setInput] = useState("");
    const [tag, setTag] = useState("React");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (title && description && input && tag) {
            push(ref(database, '/blogs', Math.random()), {
                title,
                description,
                body: input,
                tag: tag,
                date: new Date().toDateString()
            })
        }
        blogTitle.current.value = '';
        blogDescription.current.value = '';
        blogBody.current.value = '';
        setInput('');
    }

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const insertAtCursor = (value) => {
        const textarea = blogBody.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const newText = text.substring(0, start) + value + text.substring(end);
        setInput(newText);
        textarea.setSelectionRange(start + value.length, start + value.length);
        textarea.focus();
    };

    return (
        <div className={styles["main-wrapper"]}>
            <div className={styles["markup-editor__wrapper"]}>
                <form className={styles["markup-editor__form"]} onSubmit={formSubmitHandler}>
                    <h2 className={styles["title"]}>New Post</h2>
                    <input
                        type="text"
                        className={styles["input-field"]}
                        ref={blogTitle}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        placeholder="Enter the Title"
                    />
                    <input
                        type="text"
                        className={styles["input-field"]}
                        ref={blogDescription}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        placeholder="Short Description"
                    />
                    <div className={styles["main-editor"]}>
                        <div className={styles["tooltip-wrapper"]}>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("\n");
                                }}
                            >
                                \n
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("## type here");
                                }}
                            >
                                Heading
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("** bold text **");
                                }}
                            >
                                b
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("*Italic text*");
                                }}
                            >
                                i
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("-List item");
                                }}
                            >
                                list
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor("\n");
                                }}
                            >
                                para
                            </button>
                            <button
                                type="button"
                                className={styles["tool-tip"]}
                                onClick={() => {
                                    insertAtCursor(
                                        "\n```js \ncode here\n ```\n"
                                    );
                                }}
                            >
                                code
                            </button>
                        </div>
                        <textarea
                            className={styles["text-area"]}
                            rows={20}
                            ref={blogBody}
                            value={input}
                            onChange={handleInput}
                            placeholder="Start Typing your blog..."
                        ></textarea>
                    </div>
                    <select
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                        className={styles["input-field"]}
                    >
                        <option value="react">React</option>
                        <option value="javascript">JavaScript</option>
                        <option value="dsa">DSA</option>
                        <option value="blog">Blog</option>
                    </select>
                    <input
                        type="submit"
                        className={styles["primary-btns"]}
                        value="post"
                    />
                </form>
                <div className={styles["preview-wrapper"]}>
                    <Preview
                        title={blogTitle.current.value}
                        date={new Date().toDateString()}
                        tag={tag}
                        input={input}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkupEditor;
