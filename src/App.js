
import { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";


function App() {
  const [recipes, setRecipes]= useState([]);

useEffect(()=>{
  console.log(recipes)
},[recipes])

  const addRecipe = (newRecipe) =>{
    setRecipes([newRecipe])

  }
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomeScreen addedRecipes={recipes} />} />
          <Route path="newRecipe" element={<NewRecipeScreen addRecipe={addRecipe}/>} />
          <Route path="/recipe/:id" element={<DetailScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
