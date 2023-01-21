import React, { useEffect } from "react";
import StyledGistsContainer from "./StyledGistsContainer";
import GistCard from "../GistCard/GistCard";
import { Gist } from "../../types/gists-api-response";

interface GistsContainerProps {
  user?: string;
  gists: Gist[];
}

export default function GistsContainer({ user, gists }: GistsContainerProps) {
  return (
    <StyledGistsContainer>
      <div className="gistsTitle">
        <h1>{!user ? "Latest gists" : `Latest gists of the user "${user}"`}</h1>
      </div>
      <div className="auto-grid">
        {gists.map((gist) => (
          <GistCard
            key={gist.node_id}
            title={Object.keys(gist.files)[0]}
            avatarUrl={gist.owner?.avatar_url || ""}
            userName={gist.owner?.login || ""}
            description={gist.description || ""}
            tags={
              Object.values(gist.files).map((file) => file.language || "") || []
            }
          />
        ))}
      </div>
    </StyledGistsContainer>
  );
}
