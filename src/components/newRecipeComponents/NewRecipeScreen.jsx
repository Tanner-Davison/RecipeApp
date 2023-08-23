import React, { useState, useEffect } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const NewRecipeScreen = ({ addRecipe }) => {
	const navigate = useNavigate();
	const [ingredients, setIngredients] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [recipesData, setRecipesData] = useState([]);
	const [formSaved, setFormSaved] = useState(false);

	const addIngredient = () => {
		setIngredients([...ingredients, { name, quantity }]);
		setName("");
		setQuantity("");
	};

	const initialValues = {
		type: "",
		recipe_name: "",
		image_url: "",
		prep_time: "",
		cook_time: "",
		serves: "",
		ingredients: [],
		instructions: "",
	};
	const onClickHandler = () => {
		setFormSaved(false);
		navigate(`/`);
	};
	const onSubmit = (values) => {
		values.ingredients = ingredients;
    console.log(values);
    addRecipe(recipesData);
		setRecipesData(values);
		setFormSaved(true);
	};
	console.log(recipesData);

	const ingredientDisplay = ingredients.map((ing) => {
		return (
			<li>
				{ing.quantity} {ing.name}
			</li>
		);
	});
  useEffect(() => {
    console.log(recipesData)
    addRecipe(recipesData)
},[recipesData])
	return (
		<section>
			<h1>Tell us about your Recipe!</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<fieldset>
						<legend>Recipe Form</legend>
						<form onSubmit={handleSubmit}>
							<div className={styles.input_container}>
								<input
									placeholder='Title your Recipe!'
									value={values.recipe_name}
									onChange={handleChange}
									name='recipe_name'
								/>
								<input
									placeholder='Paste an Image URL'
									value={values.image_url}
									onChange={handleChange}
									name='image_url'
								/>
							</div>
							<div className={styles.radio_container}>
								<span>
									<input
										type='radio'
										value='Cook'
										onChange={handleChange}
										name='type'
									/>
									<h5>Cook</h5>
								</span>
								<span>
									<input
										type='radio'
										value='Bake'
										onChange={handleChange}
										name='type'
									/>
									<h5>Bake</h5>
								</span>
								<span>
									<input
										type='radio'
										value='Drink'
										onChange={handleChange}
										name='type'
									/>
									<h5>Drink</h5>
								</span>
							</div>
							<div className={styles.input_container}>
								<input
									placeholder='Prep Time'
									value={values.prep_time}
									onChange={handleChange}
									name='prep_time'
								/>
								<input
									placeholder='Cook Time'
									value={values.cook_time}
									onChange={handleChange}
									name='cook_time'
								/>
								<input
									placeholder='Serves'
									value={values.serves}
									onChange={handleChange}
									name='serves'
								/>
							</div>
							<h3>Ingredients</h3>
							<div className={styles.input_container}>
								<div className={styles.ingredient_inputs}>
									<input
										placeholder='Ingredient'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<input
										placeholder='Quantity'
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									/>
								</div>
								<ul>{ingredientDisplay}</ul>
							</div>
							<button
								type='button'
								className={styles.buttons}
								onClick={addIngredient}>
								Add Another
							</button>
							<textarea
								placeholder='Type your instructions'
								rows={5}
								value={values.instructions}
								onChange={handleChange}
								name='instructions'
							/>
							<button
								type='submit'
								className={styles.buttons}>
								Save
							</button>
							{formSaved && (
								<button
									onClick={onClickHandler}
									className={styles.buttons}>
									Return to Recipes
								</button>
							)}
						</form>
					</fieldset>
				)}
			</Formik>
		</section>
	);
};

export default NewRecipeScreen;
