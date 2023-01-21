import React, { useEffect } from "react";
import StyledGistsContainer from "./StyledGistsContainer";
import GistCard from "../GistCard/GistCard";

interface GistsContainerProps {
  user?: string;
}

export default function GistsContainer({ user }: GistsContainerProps) {
  return (
    <StyledGistsContainer>
      <div className="gistsTitle">
        <h1>{!user ? "Latest gists" : `Latest gists of the user "${user}"`}</h1>
      </div>
      {/* Mock data for testing the page design */}
      <div className="auto-grid">
        <GistCard
          title="Test.c"
          avatarUrl="https://avatars.githubusercontent.com/u/104873652?v=4"
          userName="Rares"
          description="123412314123"
          tags={["C"]}
        />

        <GistCard
          title="Test.c"
          avatarUrl="https://avatars.githubusercontent.com/u/104873652?v=4"
          userName="Rares"
          description="123412314123"
          tags={["C"]}
        />

        <GistCard
          title="Test.c"
          avatarUrl="https://avatars.githubusercontent.com/u/104873652?v=4"
          userName="Rares"
          description="123412314123"
          tags={["C"]}
        />
        <GistCard
          title="Test.c"
          avatarUrl="https://avatars.githubusercontent.com/u/104873652?v=4"
          userName="Rares"
          description="123412314123"
          tags={["C"]}
        />
      </div>
    </StyledGistsContainer>
  );
}
