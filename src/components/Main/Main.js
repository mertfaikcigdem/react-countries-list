import React, { useState, useContext, useEffect } from "react";
import "./Main.css";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { DataContext } from "../../context/DataContext";
import { useClickOutside } from "react-click-outside-hook";

function Main() {
  const { countries, theme, setCountry, setFiltered, filterOptions } =
    useContext(DataContext);
  const [trigger, setTrigger] = useState(false);
  const [ref, hasClickedOutside] = useClickOutside();
  const [region, setRegion] = useState([]);
  const regions = [];
  const handleClick = () => {
    countries.map((item) => regions.push(item.region));
    setRegion([...new Set(regions)]);
    setTrigger(trigger === false ? true : false);
  };
  const filteredList = (item) => {
    const filteredData = countries.filter((element) => element.region === item);
    setFiltered(filteredData);
    setTrigger(false);
  };
  useEffect(() => {
    hasClickedOutside.toString() === "true" && setTrigger(false);
  }, [hasClickedOutside.toString()]);
  return (
    <div className={`content ${theme === true ? "bg-dark text-light" : ""}`}>
      <div className="search-filter">
        <div
          className={`searchbox ${theme === true ? "bg-dark text-light" : ""}`}
        >
          <FaSearch />
          <input
            onChange={(e) => setCountry(e.target.value)}
            className={`${theme === true ? "bg-dark text-light" : ""}`}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div ref={ref} className="filter-button">
          <button
            className={`${theme === true ? "bg-dark text-light" : ""}`}
            onClick={handleClick}
          >
            Filter by Region <IoIosArrowDown className="button-icon" />
          </button>
          <ul
            className={`dropdown-menu ${trigger === false ? "hidden" : ""} ${
              theme === true ? "bg-dark text-light" : "bg-light"
            }`}
          >
            {filterOptions.map((item, index) => (
              <li onClick={() => filteredList(item)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
