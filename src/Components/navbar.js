import React from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";

export default function NavBar() {
  return (
    <div className="navbar-section">
      <div className="nav-logo">
        <FoodBankIcon fontSize="large" />
        <h4>FoodHub</h4>
      </div>
    </div>
  );
}
