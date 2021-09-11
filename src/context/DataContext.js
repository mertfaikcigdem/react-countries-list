import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext("");

export const DataProvider = ({ children }) => {
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") && localStorage.getItem("theme") === "true"
      ? true
      : false
  );
  const [country, setCountry] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [filterOptions] = useState([
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
  ]);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCountries(response.data);
    });
  }, []);
  return (
    <DataContext.Provider
      value={{
        countries,
        theme,
        setTheme,
        setCountries,
        country,
        setCountry,
        filtered,
        setFiltered,
        filterOptions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
