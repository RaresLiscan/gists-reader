import React, { useState } from "react";
import StyledGistCard from "./StyledGistCard";
import Modal from "../../shared/Modal/Modal";
import CodeViewer from "../CodeViewer/CodeViewer";
import { getText } from "../../services/http.service";

interface GistCardProps {
  title: string;
  avatarUrl: string;
  userName: string;
  description: string;
  tags: string[];
  rawDataUrl: string;
}

export default function GistCard({
  title,
  avatarUrl,
  userName,
  description,
  tags,
  rawDataUrl,
}: GistCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalCode, setModalCode] = useState<string>("");

  const openModal = async () => {
    const code = await getText(rawDataUrl);

    if (code) {
      setModalCode(code);
      setIsModalOpen(true);
    }
  };

  return (
    <StyledGistCard>
      <div className="gistTitle" title={title}>
        <h2>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</h2>
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
          {description.length > 200
            ? `${description.slice(0, 150)}...`
            : description}
        </p>
      </div>

      <div className="tags">
        <span className="tagsTitle">Tags:</span>
        <span>{tags.map((tag: string) => tag.trim()).join(", ")}</span>
      </div>
      <div className="viewCode">
        <button className="viewCodeButton" onClick={openModal}>
          View code
        </button>
      </div>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          component={<CodeViewer code={modalCode} />}
        />
      )}
    </StyledGistCard>
  );
}
