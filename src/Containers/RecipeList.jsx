import React, { useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [data, setData, detail] = useState(null);

  const handleDataReceived = (data) => {
    setData(data);
  };

  return (
    <>
    <Header onDataReceived={handleDataReceived} />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-8 mb-24">
        {data && data.map((recipe, index) =>
        <Link to={`/detail/${recipe.id}`} key={index} onClick={() => detail(recipe.id)} className="rounded shadow-md overflow-hidden bg-white border-2 border-black/[0.2] hover:border-orange-300 cursor-pointer">
            <img src={recipe.image} alt={recipe.title} />
            <h1 className="text-xl font-medium p-2">{recipe.title}</h1>
        </Link>)}
      </div>
    </>
  );
};

export default RecipeList;
