import { useSelector, useDispatch } from "react-redux";
import { verifyName } from "./experiment";
const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';



export const AllRecipes = () => {
    // const allRecipes = useSelector(selectFilteredAllRecipes);
    console.log('kaba')
    console.log(verifyName)
    // const name = useSelector(verifyName)
    // console.log(name)
  
  
    // const dispatch = useDispatch();
  
    // const onFirstRender = () => {
    //   dispatch(loadData());
    // }
    // useEffect(onFirstRender, []);
    
    // const onAddRecipeHandler = (recipe) => {
    //   dispatch(addRecipe(recipe));
    // };
  
    return (
     

        <div className="recipes-container">
            <img src={searchIconUrl}/>
            <input type="search" name="item"/>
        
            
            
            
        </div>
    );
  };