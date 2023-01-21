import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./shared/SearchBar/SearchBar";
import GistsContainer from "./components/GistsContainer/GistsContainer";
import { getGistsForUser, getLatestGists } from "./services/gits-api.service";

function App() {
  return (
    <>
      <Navbar />
      <section className="mainSection">
        <div className="appSearchBar">
          <h1>Search for github user:</h1>
          <SearchBar />
        </div>
        <GistsContainer user={"Ala micu"} />
      </section>
    </>
  );
}

export default App;
