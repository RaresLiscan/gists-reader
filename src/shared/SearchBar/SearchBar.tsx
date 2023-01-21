import React, { FormEvent, useRef } from "react";
import StyledSearchBar from "./StyledSearchBar";

interface SearchBarProps {
  submit: Function;
}

export default function SearchBar({ submit }: SearchBarProps) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(searchInputRef.current?.value);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={search}>
        <input placeholder="Search for user..." ref={searchInputRef} />
        <input type="submit" value="Search" />
      </form>
    </StyledSearchBar>
  );
}
