import React, { useRef, useState } from "react";

import styles from "../styles/editor.module.css";

import Preview from "../components/Preview";

/**
<pre class="language-javascript">
// Your JavaScript code here
</pre>
 */

const MarkupEditor = (props) => {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const blogBody = useRef("");
    const [input, setInput] = useState("");
    const [tag, setTag] = useState("React");

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
                <form className={styles["markup-editor__form"]}>
                    <h2 className={styles["title"]}>New Post</h2>
                    <input
                        type="text"
                        className={styles["input-field"]}
                        onChange={(e) => {
                            setBlogTitle(e.target.value);
                        }}
                        placeholder="Enter the Title"
                    />
                    <input
                        type="text"
                        className={styles["input-field"]}
                        onChange={(e) => {
                            setBlogDescription(e.target.value);
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
                    </select>
                    <input
                        type="submit"
                        className={styles["primary-btns"]}
                        value="post"
                    />
                </form>
                <div className={styles["preview-wrapper"]}>
                    <Preview
                        title={blogTitle}
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
