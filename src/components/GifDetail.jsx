import PropTypes from "prop-types";

export default function GifDetail({ url, username, title, rating }) {
  return (
    <div
      className="image animate__animated animate__wobble"
      data-grid-content-offset="100"
    >
      <img src={url} alt="Avatar" style={{ maxWidth: `${100}%` }} />

      <div className="description">
        <p>{title}</p>
        <span style={{ display: "block" }}>
          {" "}
          <strong>{username}</strong>
        </span>
        <span>{rating}</span>
      </div>
    </div>
  );
}

GifDetail.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
  rating: PropTypes.string,
};

GifDetail.defaultProps = {
  username: "Anónimo",
  rating: "-",
};
