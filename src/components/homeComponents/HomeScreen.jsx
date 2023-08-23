import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer'
import axios from 'axios'

const HomeScreen = ({addedRecipes}) => {
  const [recipes, setRecipes] = useState([])
  const [addedRecipesChange, setChange]=useState([])
  const url = 'https://recipes.devmountain.com'
  

  
  const getRecipes = () => {
    axios
      .get(`${url}/recipes`)
      .then((res) => {
        setRecipes(res.data)
        if(addedRecipes.length !== 0){
          setRecipes([...addedRecipes, res.data])
        }else{
          setRecipes(res.data)
        }
        console.log(res.data)
        console.log(addedRecipes)
      })
  }

  useEffect(() => {
    getRecipes()
    
  },[])


  return (
    <div>
      <AdBanner />
      <RecipeContainer getRecipes={getRecipes} recipes={recipes}/>
    </div>
  )
}

export default HomeScreen