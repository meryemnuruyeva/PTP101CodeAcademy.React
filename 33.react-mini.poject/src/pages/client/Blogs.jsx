import React, { useEffect, useState } from "react";
import { getBlogs } from "../../services/blogService";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="p-5">
      {blogs.map(b => (
        <div key={b.id} className="border p-2 mb-2">
          <h2>{b.title}</h2>
          <p>{b.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
