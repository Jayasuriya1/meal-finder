import React from "react";
import { AppState } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";

export default function CategoryRecipe() {
  const navigate = useNavigate();
  const { recipeCollectionData, setRecipeCollectionData } = AppState();
  async function searchData(keyWord) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`
    );
    const data = await response.json();
    setRecipeCollectionData(data.meals);
    navigate("/recipe/collection");
  }
  return (
    <div className="container category-recipe-section">
      <h3 className="text-center pb-5">Whatever Makes You Whole.</h3>
      <div className="row justify-content-evenly flex-wrap ">
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/beef.png"
            onClick={() => searchData("beef")}
          />
          <p className="text-center" onClick={() => searchData("beef")}>
            <strong>Beef</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/chicken.png"
            onClick={() => searchData("chicken")}
          />
          <p className="text-center" onClick={() => searchData("chicken")}>
            <strong>Chicken</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/dessert.png"
            onClick={() => searchData("dessert")}
          />
          <p className="text-center" onClick={() => searchData("dessert")}>
            <strong>Dessert</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/lamb.png"
            onClick={() => searchData("lamb")}
          />
          <p className="text-center" onClick={() => searchData("lamb")}>
            <strong>Lamb</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/miscellaneous.png"
            onClick={() => searchData("miscellaneous")}
          />
          <p
            className="text-center"
            onClick={() => searchData("miscellaneous")}
          >
            <strong>Miscellaneous</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/pasta.png"
            onClick={() => searchData("pasta")}
          />
          <p className="text-center" onClick={() => searchData("pasta")}>
            <strong>Pasta</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/pork.png"
            onClick={() => searchData("pork")}
          />
          <p className="text-center" onClick={() => searchData("pork")}>
            <strong>Pork</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/seafood.png"
            onClick={() => searchData("beef")}
          />
          <p className="text-center" onClick={() => searchData("beef")}>
            <strong>Seafood</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/side.png"
            onClick={() => searchData("side")}
          />
          <p className="text-center" onClick={() => searchData("side")}>
            <strong>Side</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/starter.png"
            onClick={() => searchData("starter")}
          />
          <p className="text-center" onClick={() => searchData("starter")}>
            <strong>Starter</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/vegan.png"
            onClick={() => searchData("vegan")}
          />
          <p className="text-center" onClick={() => searchData("vegan")}>
            <strong>Vegan</strong>
          </p>
        </div>
        <div className=" col-12 col-md-5 col-lg-3 img-cart-container">
          <img
            src="https://www.themealdb.com/images/category/vegetarian.png"
            onClick={() => searchData("vegetarian")}
          />
          <p className="text-center" onClick={() => searchData("vegetarian")}>
            <strong>Vegetarian</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
