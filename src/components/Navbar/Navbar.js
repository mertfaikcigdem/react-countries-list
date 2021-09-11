import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { BsMoon } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { DataContext } from "../../context/DataContext";

function Navbar() {
  const { theme, setTheme } = useContext(DataContext);
  const themeSwitcher = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    theme === true
      ? localStorage.setItem("theme", true)
      : localStorage.setItem("theme", false);
  }, [theme]);

  return (
    <div
      className={`navbar ${
        theme === false ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <ul className="navbar-menu">
        <li className="navbar-item">Where in the world?</li>
        <li onClick={themeSwitcher} className="navbar-item">
          {theme === true ? (
            <span>
              <HiLightBulb size="20px" className="navbar-icon" />
              Light Mode
            </span>
          ) : (
            <span>
              <BsMoon size="20px" className="navbar-icon" />
              Dark Mode
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
