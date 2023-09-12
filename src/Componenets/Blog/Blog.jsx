import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark }) => {
  // console.log(blog);
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2  text-red-600">
            <FaBookmark onClick={() => handleAddToBookmark(blog)}></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      {hashtags.map((hash, index) => (
        <span key={index}>
          <a className="mr-2" href="#">
            #{hash}
          </a>
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};
export default Blog;
