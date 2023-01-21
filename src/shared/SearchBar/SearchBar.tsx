import React, { FormEvent, useRef } from "react";
import StyledSearchBar from "./StyledSearchBar";

export default function SearchBar() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(searchInputRef.current?.value);
  };

  return (
    <StyledSearchBar>
      <h3>Search for github user:</h3>
      <form onSubmit={search}>
        <input placeholder="Search for user..." ref={searchInputRef} />
        <input type="submit" value="Search" />
      </form>
    </StyledSearchBar>
  );
}
