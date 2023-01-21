import React from "react";
import StyledGistCard from "./StyledGistCard";

interface GistCardProps {
  title: string;
  avatarUrl: string;
  userName: string;
  description: string;
  tags: string[];
}

export default function GistCard({
  title,
  avatarUrl,
  userName,
  description,
  tags,
}: GistCardProps) {
  return (
    <StyledGistCard>
      <div className="gistTitle">
        <h2>{title}</h2>
      </div>
      <div className="user">
        <div className="avatar">
          <img
            src={avatarUrl}
            alt={"user avatar"}
            width={25}
            height={25}
            className="avatarImage"
          />
          <p>{userName}</p>
        </div>
      </div>

      <div className="description">
        <p>
          <span className="descriptionTitle">Description: </span>
          {description}
        </p>
      </div>

      <div className="tags">
        <span className="tagsTitle">Tags:</span>
        {tags.map((tag: string, index) => (
          <div className="tagContent">
            <a href="#">
              <p>
                {tag.trim()} {index !== tags.length - 1 ? "," : ""}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className="viewCode">
        <button className="viewCodeButton">View code</button>
      </div>
    </StyledGistCard>
  );
}
