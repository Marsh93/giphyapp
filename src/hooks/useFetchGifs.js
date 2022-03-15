import { useState, useEffect } from "react";
import getGif from "../services/getGifs";

const useFetchGifs = (category, filter) => {
  const [state, setState] = useState({
    data: [],
    load: true,
  });

  useEffect(() => {
    getGif(category, filter)
      .then((gifs) => {
        setTimeout(() => {
          setState({
            data: gifs,
            load: false,
          });
        }, 3000);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setState({
          data: [],
          load: false,
        });
      });
  }, [category]);

  return state;
};

export default useFetchGifs;
