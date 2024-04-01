import React, { useState } from "react";
import { FunctionList, InfoContent } from "../../styles/GraphComponentStyles";
import ExtractFunction from "./ExtractFunction.js";
import Modal from "./Modal.js";

const RenderWeights = ({ weights, neighborId, graph }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleItemClick = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  if (!weights || weights.length === 0) {
    return <InfoContent>No functions listed.</InfoContent>;
  }

  return (
    <>
      <FunctionList>
        {weights.map((weight, index) => {
          const content = ExtractFunction(graph.content[neighborId], weight);
          if (!content) return null;

          return (
            <li
              key={index}
              onClick={() => handleItemClick(content)}
              style={{ cursor: "pointer" }}
            >
              Function: {weight}
            </li>
          );
        })}
      </FunctionList>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={modalContent}
      />
    </>
  );
};

export default RenderWeights;
