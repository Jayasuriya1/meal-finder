import React, { useState } from "react";
import NavBar from "./navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@mui/icons-material/Search";
import { AppState } from "../Context/AppProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Banner() {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState("");
  const { recipeCollectionData, setRecipeCollectionData } = AppState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const getData = async () => {
    handleOpen();
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`
    );
    const data = await response.json();
    if (data.meals == null) {
      handleClose();
      toast.error("Sorry, No Data Found");
    }
    if (data.meals != null) {
      handleClose();
      setRecipeCollectionData(data.meals);
      navigate("/recipe/collection");
    }
  };
  return (
    <div className="banner-section">
      <NavBar />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 banner-content">
            <h2>
              It is even better than <br />
              an expensive cookery book
            </h2>
            <p>Learn how to make your favorite restaurant’s dishes</p>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => setKeyWord(e.target.value)}
                className="banner-search-input"
                placeholder="I want to make..."
                aria-label="I want to make..."
                aria-describedby="basic-addon2"
              />
              <Button
                className="banner-search-btn"
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => getData()}
              >
                <SearchIcon />
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
