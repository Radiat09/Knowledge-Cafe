import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropType from "prop-types";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleAddToBookmark={handleAddToBookmark}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propType = {
  handleAddToBookmarkl: PropType.func.isRequired,
};
export default Blogs;
