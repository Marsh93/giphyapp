import { useState, useEffect } from "react";
import { getGif } from '../services/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    load: true
  })

  useEffect( () => {
    getGif( category )
      .then( gifs => {
        setTimeout(() => {
          setState({
            data: gifs,
            load: false
          })
        }, 3000); 
      })
      .catch( err => setState({
        data: [],
        load: false
      }));
  }, [ category ])

  return state;

}