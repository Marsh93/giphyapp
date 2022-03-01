import PropTypes from "prop-types";

export default function Alert({ reason }) {
  return <div className="alert">{reason}</div>;
}

Alert.propTypes = {
  reason: PropTypes.string.isRequired,
};
