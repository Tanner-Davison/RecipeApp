import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeContainer from "./RecipeContainer";
import axios from "axios";

const HomeScreen = ({ addedRecipes }) => {
	const [recipes, setRecipes] = useState([]);
	const url = "https://recipes.devmountain.com";

	const hasEmptyValues = (recipe) => {
		for (const key in recipe) {
			if (recipe.hasOwnProperty(key)) {
				if (
					recipe[key] === "" ||
					recipe[key] === null ||
					recipe[key] === undefined
				) {
					return true;
				}
			}
		}
		return false;
	};

	const getValidRecipes = (recipeArray) => {
		return recipeArray.filter((recipe) => !hasEmptyValues(recipe));
	};

	const getRecipes = () => {
		axios.get(`${url}/recipes`).then((res) => {
			const allRecipes = res.data;
			const validAllRecipes = getValidRecipes(allRecipes);
			const validAddedRecipe = getValidRecipes(addedRecipes);

			setRecipes([...validAddedRecipe, ...validAllRecipes]);
		});
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div>
			<AdBanner />
			<RecipeContainer
				getRecipes={getRecipes}
				recipes={recipes}
			/>
		</div>
	);
};

export default HomeScreen;
