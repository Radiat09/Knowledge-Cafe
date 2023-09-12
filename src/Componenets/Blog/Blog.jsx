import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
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
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_time} min read</p>
          <button></button>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      {hashtags.map((hash, index) => (
        <span key={index}>
          <a href="#">{hash}</a>
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
