import React, { useEffect, useState } from "react";
import RecipesList from "../common/RecipesList";

const ListPage = () => {

	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian&apiKey=3fcd89c737204c9d9e588415088e7b96")
			.then(res => res.json())
			.then(data => {
				setRecipeResource(data.recipes);
				setIsLoading(false);
		})
		// return () => {
		// 	cleanup
		// };
	}, []);

  return (
    <div className="App">
		<h1>
			List
		</h1>
		
		{isLoading && <div>Loading...</div>}

		{/* {recipeResource.length === 0 && <div></div>} */}

		<RecipesList 
			list={recipeResource} 
		/>
    </div>
  );
}

export default ListPage;
