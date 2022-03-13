import { useState } from "react";
import { FaEye } from "react-icons/fa";
import AddCategory from "./components/category/AddCategory";
import Error from "./components/error/Error";
import GifGrid from "./components/GifGrid";
import History from "./components/history/History";
import Button from "./components/button/Button";
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

  const handleViewHistory = () => {
    setViewHistory(!viewHistory);
  };

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
          <GifGrid className="" key={category} category={category} />
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
