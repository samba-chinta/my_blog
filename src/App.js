import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import MarkupEditor from './pages/MarkupEditor';

const BLOG_POSTS = [
  {
    title: "JavaScript Class",
    description: "A detailed description and explanation about javascript class",
    relatedTo: "JavaScript",
    date: new Date(2022, 9, 22).toDateString()
  },
  {
    title: "React Hook",
    description: "A detailed description and explanation about react hook",
    relatedTo: "JavaScript",
    date: new Date(2022, 10, 22).toDateString()
  },
  {
    title: "Quick Sort Algorithm",
    description: "A detailed description and explanation about Quick Sort Algorithm",
    relatedTo: "DSA",
    date: new Date(2022, 11, 2).toDateString()
  }
]

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home recentPosts={BLOG_POSTS} />} />
        <Route path='/new-post' element={<MarkupEditor/>}/>
        <Route path = "*" element={<h2>Page Not Found!</h2>} />
      </Routes>
    </div>
  );
}

export default App;
