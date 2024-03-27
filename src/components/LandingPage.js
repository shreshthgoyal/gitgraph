import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GlobalStyle,
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledHeading,
  StyledInput,
  StyledSubHeading,
  SupportNotice,
} from "../styles/GlobalStyle.js";

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/graph", { state: { queryParam: query } });
  };

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeading>Github Graph Visualizer</StyledHeading>
        <StyledSubHeading>
          Visualize functional dependencies in your GitHub repos.
        </StyledSubHeading>
        <SupportNotice>
          Currently supporting Python repositories only.
        </SupportNotice>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username/repo_name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <StyledButton type="submit">Visualize</StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default LandingPage;
