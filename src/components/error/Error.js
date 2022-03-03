import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./error.css";

export default function Error({ reason, delay, setHasError, setMessageError }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setHasError(false);
      setMessageError("");
    }, delay);
  }, [delay]);

  return visible ? <div className="alert"> {reason} </div> : null;
}

Error.propTypes = {
  reason: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  setHasError: PropTypes.func.isRequired,
  setMessageError: PropTypes.func.isRequired,
};
