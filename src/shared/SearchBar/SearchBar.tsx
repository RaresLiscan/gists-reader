import React, { FormEvent, useRef } from "react";
import StyledSearchBar from "./StyledSearchBar";

interface SearchBarProps {
  submit: Function;
  placeholder?: string;
}

export default function SearchBar({ submit, placeholder }: SearchBarProps) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(searchInputRef.current?.value);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={search}>
        <input placeholder={placeholder} ref={searchInputRef} />
        <input type="submit" value="Search" />
      </form>
    </StyledSearchBar>
  );
}
