import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./alert.css";

export default function Alert({ reason, delay }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return visible ? <div className="alert"> {reason} </div> : null;
}

Alert.propTypes = {
  reason: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};
