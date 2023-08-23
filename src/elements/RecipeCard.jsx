import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
	const navigate = useNavigate();
	const [imageLoaded, setImageLoaded] = useState(false);

  const randomImgArr = [
		"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
		"https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg",
		"https://images7.alphacoders.com/110/1103153.jpg",
		"https://wallpapershome.com/images/pages/ico_h/17816.jpg",
		"https://img.freepik.com/premium-photo/head-form-plate-which-fruits-vegetables-lie-white-background-copy-space-clean-healthy-food-concept_896675-601.jpg?w=2000",
		"https://wallpaperaccess.com/full/767292.jpg",
		"https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg"
  ];
  const randomIndex = Math.floor(Math.random() * randomImgArr.length)
  const randomImgElement = randomImgArr[randomIndex]
  
	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	const handleImageError = () => {
		setImageLoaded(false);
	};

	const handleClick = () => {
		navigate(`/recipe/${recipe.recipe_id}`);
	};

	return (
		<div className={styles.recipe_card}>
			<div>
				<div className={styles.recipe_img_container}>
					<img
						src={recipe.image_url}
						onLoad={handleImageLoad}
						onError={handleImageError}
						style={{ display: imageLoaded ? "block" : "none" }}
					/>
          {!imageLoaded && (
            <img src={randomImgElement} alt={'randomImg'} />
					)}
				</div>
				<h3>{recipe.recipe_name}</h3>
			</div>
			<button
				className={styles.buttons}
				onClick={handleClick}>
				See More
			</button>
		</div>
	);
};

export default RecipeCard;
