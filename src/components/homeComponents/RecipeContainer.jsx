import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";
import styles from "./Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({recipes, getRecipes}) => {
  const [search, setSearch] = useState("");
  

  if(recipes <5){
    getRecipes();
  }
  const recipeDisplay = recipes
    .filter((recipe) => {
      // Check if recipe_name is empty or undefined
      const title = recipe.recipe_name || "";
      const searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <section className={styles.recipe_section}>
      <h2 style={{ color: 'black' ,fontWeight:'bold'}}>Search a recipe!</h2>
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipe_container}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;
