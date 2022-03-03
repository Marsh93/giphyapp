import { useState } from "react";
import AddCategory from "./components/category/AddCategory";
import Error from "./components/error/Error";
import GifGrid from "./components/GifGrid";
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

  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategory
        setCategories={setCategories}
        setHasError={setHasError}
        setMessageError={setMessageError}
      />

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
    </>
  );
}
