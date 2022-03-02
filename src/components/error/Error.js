import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./error.css";

export default function Error({ reason, delay }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return visible ? <div className="alert"> {reason} </div> : null;
}

Error.propTypes = {
  reason: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};
