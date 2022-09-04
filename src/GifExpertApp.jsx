import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      {/* Listado de Gif */}
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map(
        (category) => (
          <GifGrid key={category} category={category} />
        ) // No se debe usar el indice, react utiliza la key para sus procesos en caso de una eliminación o algo podría confundirse
      )}

      {/* Gif item */}
    </>
  );
};
