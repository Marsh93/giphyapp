import { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({
  setCategories,
  setHasError,
  setMessageError,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const hasDuplicatedCategory = (categories, category) => {
    const existCategory = categories.includes(category);
    if (existCategory) setMessageError("Categoría Duplicada");
    return existCategory;
  };

  const isCategoryValid = (category) => {
    const newCategory = category.trim();
    const isValidCategory = newCategory.length > 3;
    if (!isValidCategory) setMessageError("Categoría Inválida");
    return isValidCategory;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((cats) => {
      const hasError =
        !isCategoryValid(inputValue) || hasDuplicatedCategory(cats, inputValue);
      setHasError(hasError);
      if (hasError) return [...cats];
      return [inputValue, ...cats];
    });

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una nueva categoria a agregar"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* <button onClick={ handleAdd }>Agregar Categoría</button> */}
      <button type="submit">Agregar Categoría</button>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  setHasError: PropTypes.func.isRequired,
  setMessageError: PropTypes.func.isRequired,
};
