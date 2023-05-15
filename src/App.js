import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import database from "./config/config";
import { ref, child, get } from "firebase/database";

import Home from "./pages/Home";
import MarkupEditor from "./pages/MarkupEditor";
import Topics from "./pages/Topics";
import Post from "./pages/Post";

const App = (props) => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            get(child(ref(database), "/blogs"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        let posts = [];
                        let blogs = snapshot.val();
                        for (let blog in blogs) {
                            posts.push(blogs[blog]);
                        }
                        setBlogPosts(posts);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getData();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home recentPosts={blogPosts} />} />
                <Route path="/new-post" element={<MarkupEditor />} />
                {blogPosts && (
                    <Route
                        path="/react"
                        element={
                            <Topics
                                topic="React"
                                topicBlogs={blogPosts.filter(
                                    (post) => post.tag.toLowerCase() === "react"
                                )}
                            />
                        }
                    />
                )}
                {blogPosts && (
                    <Route
                        path="/javascript"
                        element={
                            <Topics
                                topic="JavaScript"
                                topicBlogs={blogPosts.filter(
                                    (post) =>
                                        post.tag.toLowerCase() === "javascript"
                                )}
                            />
                        }
                    />
                )}
                {blogPosts && (
                    <Route
                        path="/dsa"
                        element={
                            <Topics
                                topic="Data Structures and Algorithms"
                                topicBlogs={blogPosts.filter(
                                    (post) => post.tag.toLowerCase() === "dsa"
                                )}
                            />
                        }
                    />
                )}
                {blogPosts && (
                    <Route
                        path="/blog"
                        element={
                            <Topics
                                topic="Blog"
                                topicBlogs={blogPosts.filter(
                                    (post) => post.tag.toLowerCase() === "blog"
                                )}
                            />
                        }
                    />
                )}
                {blogPosts &&
                    blogPosts.map((post) => {
                        return (
                          <Route
                            key={Math.random()}
                                path={`/${post.tag.toLowerCase()}/${post.title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-")}`}
                                element={
                                    <Post
                                        topic={post.tag.toLowerCase()}
                                        post={post}
                                    />
                                }
                            />
                        );
                    })}
                <Route path="*" element={<h2>Page Not Found!</h2>} />
            </Routes>
        </div>
    );
};

export default App;
