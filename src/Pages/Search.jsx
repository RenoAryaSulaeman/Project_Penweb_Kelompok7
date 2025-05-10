import React from "react";
import RecipeList from "../Containers/RecipeList";

const Search = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cari Resep</h1>
            <p className="mb-4">Temukan resep favoritmu berdasarkan bahan atau nama masakan.</p>
            <RecipeList />
        </div>
    );
};

export default Search;
