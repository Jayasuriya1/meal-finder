import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState(null);
  const { recipeCollectionData, setRecipeCollectionData } = AppState();
  useEffect(() => {
    const getRecipe = async () => {
      const mealData = recipeCollectionData.find((data) => {
        return id == data.idMeal;
      });
      setRecipeData(mealData);
    };
    getRecipe();
  }, []);
  return (
    <div className="container">
      <div className="d-flex gap-3 mt-4 mb-3">
        <h2 className=" back-to-home-btn" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          Home
        </h2>
        <h2
          className="ml-2  back-to-home-btn"
          onClick={() => navigate("/recipe/collection")}
        >
          <ArrowBackIcon />
          Back
        </h2>
      </div>
      {recipeData && (
        <div className="row mb-5 ">
          <div className="col-12 col-sm-12 col-xl-6">
            <img
              src={recipeData.strMealThumb}
              className="recipe-image img-fluid"
            />
          </div>
          <div className="col-12 col-sm-12 col-xl-6 recipe-main-detailes-container">
            <div className="mt-3">
              <h2>Recipe Name : {recipeData.strMeal}</h2>
              <h2>Categort : {recipeData.strCategory}</h2>
              <h2>Recipe Name : {recipeData.strArea}</h2>
              <h2>Area : {recipeData.strArea}</h2>
            </div>
            <a
              href={recipeData.strYoutube}
              target="_blank"
              className="watch-btn"
            >
              {" "}
              Watch Video
            </a>
          </div>
          <div className=" col-12 col-sm-12 col-xl-6">
            <div className="ingredient-container ">
              <h3 className="mt-4">Ingredients</h3>
              {recipeData.strMeasure1 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure1}</strong>{" "}
                  {recipeData.strIngredient1}{" "}
                </p>
              )}
              {recipeData.strMeasure2 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure2}</strong>{" "}
                  {recipeData.strIngredient2}{" "}
                </p>
              )}
              {recipeData.strMeasure3 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure3}</strong>{" "}
                  {recipeData.strIngredient3}{" "}
                </p>
              )}
              {recipeData.strMeasure4 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure4}</strong>{" "}
                  {recipeData.strIngredient4}{" "}
                </p>
              )}
              {recipeData.strMeasure5 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure5}</strong>{" "}
                  {recipeData.strIngredient5}{" "}
                </p>
              )}
              {recipeData.strMeasure6 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure6}</strong>{" "}
                  {recipeData.strIngredient6}{" "}
                </p>
              )}
              {recipeData.strMeasure7 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure7}</strong>{" "}
                  {recipeData.strIngredient7}{" "}
                </p>
              )}
              {recipeData.strMeasure8 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure8}</strong>{" "}
                  {recipeData.strIngredient8}{" "}
                </p>
              )}
              {recipeData.strMeasure9 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure9}</strong>{" "}
                  {recipeData.strIngredient9}{" "}
                </p>
              )}
              {recipeData.strMeasure10 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure10}</strong>{" "}
                  {recipeData.strIngredient10}{" "}
                </p>
              )}
              {recipeData.strMeasure11 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure11}</strong>{" "}
                  {recipeData.strIngredient11}{" "}
                </p>
              )}
              {recipeData.strMeasure12 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure12}</strong>{" "}
                  {recipeData.strIngredient12}{" "}
                </p>
              )}
              {recipeData.strMeasure13 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure13}</strong>{" "}
                  {recipeData.strIngredient13}{" "}
                </p>
              )}
              {recipeData.strMeasure14 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure14}</strong>{" "}
                  {recipeData.strIngredient14}{" "}
                </p>
              )}
              {recipeData.strMeasure15 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure15}</strong>{" "}
                  {recipeData.strIngredient15}{" "}
                </p>
              )}
              {recipeData.strMeasure16 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure16}</strong>{" "}
                  {recipeData.strIngredient16}{" "}
                </p>
              )}
              {recipeData.strMeasure17 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure17}</strong>{" "}
                  {recipeData.strIngredient17}{" "}
                </p>
              )}
              {recipeData.strMeasure18 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure18}</strong>{" "}
                  {recipeData.strIngredient18}{" "}
                </p>
              )}
              {recipeData.strMeasure19 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure19}</strong>{" "}
                  {recipeData.strIngredient19}{" "}
                </p>
              )}
              {recipeData.strMeasure20 && (
                <p>
                  {" "}
                  <strong>{recipeData.strMeasure20}</strong>{" "}
                  {recipeData.strIngredient20}{" "}
                </p>
              )}
            </div>
          </div>
          <div className="method-container col-12 col-sm-12 col-xl-6">
            <h3 className="mt-4">Method</h3>
            <p>{recipeData.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
