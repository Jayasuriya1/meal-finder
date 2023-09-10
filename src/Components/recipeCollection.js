import React from "react";
import { AppState } from "../Context/AppProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function ReciprCollection() {
  const navigate = useNavigate();
  const { recipeCollectionData, setRecipeCollectionData } = AppState();
  return (
    <div className="container">
      <div className="mt-4 mb-3 back-to-home-btn" onClick={() => navigate("/")}>
        <h3>
          <ArrowBackIcon />
          Home
        </h3>
      </div>
      <div className="row">
        {recipeCollectionData &&
          recipeCollectionData.map((data, index) => {
            return (
              <div
                key={index}
                className=" col-12 col-md-5 col-lg-3  img-cart-container"
              >
                <img
                  src={data.strMealThumb}
                  onClick={() => navigate(`/recipe/${data.idMeal}`)}
                />
                <p onClick={() => navigate(`/recipe/${data.idMeal}`)}>
                  <strong>{data.strMeal}</strong>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
