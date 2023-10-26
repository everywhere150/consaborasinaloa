import './css/recipeDetail.css';
import { useLocation } from 'react-router-dom';
import RecipesHome from './generics/recipesHome';

function RecipeDetails() {
  const location = useLocation();
  const { recipe } = location.state || {};

  console.log('Receta:', recipe);

  return (
    <div className='recipe-detail-container-principal'>
      {recipe ? (
        <div className='main-container-recipe-detail'>
          <RecipesHome imagen={recipe.imagen} titulo={recipe.titulo} descripcion={recipe.descripcion}/>
        </div>
      ) : (
        <p>Receta no encontrada.</p>
      )}
    </div>
  );
}

export default RecipeDetails;
