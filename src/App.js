import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/home";
import ReciprCollection from "./Components/recipeCollection";
import Recipe from "./Components/recipe";

function App() {
  return (
    <div className="main-section">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/recipe/collection"
            element={<ReciprCollection />}
          />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
