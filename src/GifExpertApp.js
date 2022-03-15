import { useState, useRef } from "react";
import { useOutsideClick } from "rooks";
import { FaEye } from "react-icons/fa";
import AddCategory from "./components/category/AddCategory";
import Error from "./components/error/Error";
import GifGrid from "./components/GifGrid";
import History from "./components/history/History";
import Button from "./components/button/Button";
import Filter from "./components/popup/Filter";

import "animate.css";

/**
 * * Important method
 * ! Esto ya esta deprecado
 * TODO: adsadasd
 * ? Should parameters
 */

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [viewHistory, setViewHistory] = useState(false);
  const [searchResults, setSearchResults] = useState(5);
  const [viewFilters, setViewFilters] = useState(false);

  const ref = useRef();

  const handleViewHistory = () => {
    setViewHistory(!viewHistory);
  };

  const handleViewFilters = () => {
    setViewFilters(!viewFilters);
  };

  useOutsideClick(ref, handleViewFilters);

  return (
    <>
      <div className="container-giff-expert">
        <h1>Gif Search App</h1>

        <div className="container-form-control">
          <AddCategory
            setCategories={setCategories}
            setHasError={setHasError}
            setMessageError={setMessageError}
          />

          <div style={{ position: "relative" }}>
            <Button onClick={handleViewFilters} type="button" width="130px">
              Filtrar
            </Button>
            {viewFilters && (
              <div
                ref={ref}
                style={{ position: "absolute", top: "2rem", zIndex: 10 }}
              >
                <Filter
                  results={searchResults}
                  setSearchResults={setSearchResults}
                />
              </div>
            )}
          </div>

          {!viewHistory && (
            <Button
              icon
              onClick={handleViewHistory}
              type="button"
              width="130px"
            >
              <FaEye /> Ver Historial
            </Button>
          )}
        </div>

        <hr />

        {hasError && (
          <Error
            delay={3000}
            reason={messageError}
            setHasError={setHasError}
            setMessageError={setMessageError}
          />
        )}

        {categories.map((category) => (
          <GifGrid
            className=""
            key={category}
            filter={searchResults}
            category={category}
          />
        ))}
      </div>
      <div>
        {viewHistory && (
          <History
            view={viewHistory}
            categories={categories}
            setViewHistory={setViewHistory}
          />
        )}
      </div>
    </>
  );
}
