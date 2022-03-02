import PropTypes from "prop-types";
import EmptyBox from "../../assets/empty-box.png";
import "./empty.css";

export default function Warning({ message }) {
  return (
    <div className="empty">
      <img src={EmptyBox} alt="empty box" />
      <span className="title-empty">{message}</span>
    </div>
  );
}

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};
