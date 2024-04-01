import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { StyledPre } from "../../styles/GlobalStyle";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <FaWindowClose
          onClick={onClose}
          style={{
            float: "right",
          }}
        />
        <StyledPre>{content}</StyledPre>
      </div>
    </div>
  );
};

export default Modal;
