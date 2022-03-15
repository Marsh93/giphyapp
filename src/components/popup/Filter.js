import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardFilter = styled.div`
  position: absolute;
  background: #df6064;
  color: white;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  padding: 20px;
`;

const sliderConfig = (min, max, defaultSlider) => {
  const [slider, setSlide] = useState(defaultSlider);

  const handleChange = (e) => {
    setSlide(+e.target.value);
  };

  const props = {
    min,
    max,
    value: slider,
    onChange: handleChange,
  };
  return props;
};

function Filter({ results, setSearchResults }) {
  const { min, max, value, onChange } = sliderConfig(5, 10, results);

  useEffect(() => {
    setSearchResults(value);
  }, [value]);

  return (
    <CardFilter>
      <label htmlFor="results">
        # Resultados: {value}
        <input
          type="range"
          id="slider"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </label>
    </CardFilter>
  );
}

Filter.defaultProps = {
  results: 5,
};

Filter.propTypes = {
  results: PropTypes.number,
  setSearchResults: PropTypes.func.isRequired,
};

export default Filter;
