/* En esta clase recibimos la funcion de statte desde el padre para agregar las categorias, no esta mal
pero no es la mejor forma de hacerlo*/

import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("One punch");

  //   const onInputChange = (event) => {
  //     console.log(event.target.value);
  //     setInputValue(event.target.value);
  //   };

  /* Es mejor trabajar con desestructuracion por orden*/
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
    console.log(event);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
