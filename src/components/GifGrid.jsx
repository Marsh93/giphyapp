import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifDetail } from './GifDetail';
import { JustifiedGrid } from "@egjs/react-grid";
import 'animate.css';
import "../css/masounryGrid.css";


const GifGrid = ({ category }) => {

  const { data: images, load } = useFetchGifs( category );

  return (
    <div className='animate__animated animate__fadeIn'>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
      <span className='animate__animated animate__flash'>{ load && 'Cargando gifs ...' }</span>
      <JustifiedGrid
        className="container"
        gap={3}
        defaultDirection={"end"}
        align={"justify"}
        columnRange={[1,5]}
        rowRange={0}
        sizeRange={[200,1000]}
        isCroppedSize={false}
        displayedRow={-1}
      >
        { 
          images.length > 0 && 
          images.map( ({id, url, username, title, rating}) => (
            <GifDetail
              key={ id } 
              url={ url }
              username={ username }
              title={ title }
              rating={ rating }
            />
          ))
        }
      </JustifiedGrid>
    </div>
  )
}

GifGrid.prototypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid