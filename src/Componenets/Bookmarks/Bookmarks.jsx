import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div className="bg-orange-300 p-8 m-5 rounded-2xl">
        <h3 className="text-4xl "> Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        Boorkmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} idx={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
