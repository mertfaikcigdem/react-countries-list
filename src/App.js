import React from "react";
import "./App.css";
import { DataProvider } from "./context/DataContext";
import Container from "./components/Container/Container";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Container />
      </div>
    </DataProvider>
  );
}

export default App;
