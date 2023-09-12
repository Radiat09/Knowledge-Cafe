import PropTypes from "prop-types";
const Bookmark = ({ bookmark, idx }) => {
  const { title } = bookmark;
  return (
    <div className="p-5 my-2 mx-10 bg-slate-200 rounded-xl flex">
      <span className=" font-bold text-lg">{idx + 1}.</span>
      <h3 className="text-xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};
export default Bookmark;
