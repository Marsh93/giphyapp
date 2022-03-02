import PropTypes from "prop-types";
import { JustifiedGrid } from "@egjs/react-grid";
import useFetchGifs from "../hooks/useFetchGifs";
import GifDetail from "./GifDetail";
import Loading from "./loading/Loading";
import Warning from "./empty/Empty";
import "animate.css";
import "../css/masounryGrid.css";

function GifGrid({ category }) {
  const { data: images, load } = useFetchGifs(category);

  return (
    <div className="">
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <span className="animate__animated animate__flash">
        {load && <Loading />}
      </span>
      {images.length === 0 && !load ? (
        <Warning message="Sin Resultados" />
      ) : (
        <JustifiedGrid
          className="container animate__animated animate__bounceInLeft"
          gap={3}
          defaultDirection="end"
          align="justify"
          columnRange={[1, 5]}
          rowRange={0}
          sizeRange={[200, 1000]}
          isCroppedSize={false}
          displayedRow={-1}
        >
          {images.length > 0 &&
            images.map(({ id, url, username, title, rating }) => (
              <GifDetail
                key={id}
                url={url}
                username={username}
                title={title}
                rating={rating}
              />
            ))}
        </JustifiedGrid>
      )}
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
