import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledButton, StyledForm, StyledInput } from "../styles/GlobalStyle"; // Adjust the import path as necessary
import { Container } from "../styles/GraphComponentStyles";
import GraphComponent from "./GraphComponent/index";

const GraphPage = () => {
  const location = useLocation();
  // Initialize inputValue with the queryParam from location state or an empty string
  const [inputValue, setInputValue] = useState(
    location.state?.queryParam || ""
  );
  const [queryParam, setQueryParam] = useState(
    location.state?.queryParam || ""
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryParam(inputValue);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder={queryParam}
          onChange={(e) => handleInputChange(e)}
        />
        <StyledButton type="submit">Visualize</StyledButton>
      </StyledForm>
      <GraphComponent queryParam={queryParam} />
    </Container>
  );
};

export default GraphPage;
