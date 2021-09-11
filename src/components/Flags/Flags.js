import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "./Flag.css";

function Flags() {
  const { countries, theme, country, filtered } = useContext(DataContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    filtered.length !== 0 ? setData(filtered) : setData(countries);
  });
  return (
    <div className="wrapper">
      <div className="countries">
        {data
          .filter((value) => {
            if (country === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(country.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <div key={index} className="country-card">
              <div className="country-flag">
                <img src={item.flag} alt="" />
              </div>
              <div className="info">
                <div
                  className={`country-name ${
                    theme === true ? "bg-dark text-light" : ""
                  }`}
                >
                  <span>{item.name}</span>
                </div>
                <div
                  className={`country-info ${
                    theme === true ? "bg-dark text-light" : ""
                  }`}
                >
                  <span>Population: {item.population.toLocaleString()}</span>
                  <span>Region: {item.region}</span>
                  <span>Capital: {item.capital}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Flags;
