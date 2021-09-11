import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Flags from "../Flags/Flags";
import "./Container.css";

function Container() {
  const { theme } = useContext(DataContext);
  return (
    <div className={`container  ${theme === true ? "bg-dark text-light" : ""}`}>
      <Navbar />
      <Main />
      <Flags />
    </div>
  );
}

export default Container;
