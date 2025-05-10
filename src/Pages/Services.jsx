import React from "react";

const Services = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Services</h1>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <strong>Recipe Collections:</strong> Discover a wide range of recipes, from traditional Indonesian dishes to international favorites.
                </li>
                <li>
                    <strong>Search and Filter:</strong> Easily find recipes by category such as vegetarian, italian, or based on ingredients.
                </li>
                <li>
                    <strong>Favorite and Save:</strong> Mark recipes as your favorite and save them for later use. 
                </li>
                <li>
                    <strong>Ingredient-Based Suggestions:</strong> Enter the ingredients you have and get suggestions on what you can cook. 
                </li>
            </ul>
        </div>
    );
};

export default Services;
