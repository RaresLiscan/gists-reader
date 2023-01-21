import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./shared/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  );
}

export default App;
