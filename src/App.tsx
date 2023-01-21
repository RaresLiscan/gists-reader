import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./shared/SearchBar/SearchBar";
import GistsContainer from "./components/GistsContainer/GistsContainer";
import { Gist } from "./types/gists-api-response";
import { getGistsForUser, getLatestGists } from "./services/gits-api.service";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [gists, setGists] = useState<Gist[]>([]);

  async function getInitialData() {
    const latestGists = await getLatestGists();

    if (!latestGists) {
      return;
    }

    setGists(latestGists);
  }

  useEffect(() => {
    async function getUserGists() {
      if (userName) {
        const latestUserGists = await getGistsForUser(userName);
        setGists(latestUserGists);
      } else {
        getInitialData();
      }
    }

    getUserGists();
  }, [userName]);

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mainSection">
        <div className="appSearchBar">
          <h1>Search for github user:</h1>
          <SearchBar submit={setUserName} placeholder="Search for user..." />
        </div>
        <GistsContainer user={userName} gists={gists} />
      </section>
    </>
  );
}

export default App;
