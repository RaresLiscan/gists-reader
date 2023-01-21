import React from "react";
import StyledModal from "./StyledModal";

interface ModalProps {
  component?: React.ReactNode;
  closeModal: Function;
}

export default function Modal({ component, closeModal }: ModalProps) {
  return component ? (
    <StyledModal>
      <div className="overlay" onClick={() => closeModal()}></div>
      <div className="modal">{component}</div>
    </StyledModal>
  ) : null;
}
