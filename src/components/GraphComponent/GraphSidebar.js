import React from "react";
import {
  FunctionList,
  InfoContent,
  InfoTitle,
  NeighborWrapper,
  SidebarContainer,
} from "../../styles/GraphComponentStyles";

const GraphSidebar = ({ data }) => {
  const renderWeights = (weights) => {
    if (!weights || weights.length === 0) {
      return <InfoContent>No functions listed.</InfoContent>;
    }
    return (
      <FunctionList>
        {weights.map((weight, index) => (
          <li key={index}>Function: {weight}</li>
        ))}
      </FunctionList>
    );
  };

  const renderNeighborWeights = (neighborId) => {
    const weights = data.links
      .filter(
        (link) => link.source.id === neighborId || link.target.id === neighborId
      )
      .map((link) => link.weights || [])
      .flat();
    return renderWeights(weights);
  };

  return (
    <SidebarContainer>
      {data.node && (
        <>
          <InfoTitle>Node Information</InfoTitle>
          <InfoContent>ID: {data.node.id}</InfoContent>
        </>
      )}

      {data.link && (
        <>
          <InfoTitle>Link Information</InfoTitle>
          <InfoContent>
            Source: {data.link.source.id || data.link.source}
          </InfoContent>
          <InfoContent>
            Target: {data.link.target.id || data.link.target}
          </InfoContent>
          {renderWeights(data.link.weights || [])}
        </>
      )}

      {data.neighbors.length > 0 && (
        <>
          <InfoTitle>Neighbors</InfoTitle>
          {data.neighbors.map((neighbor, index) => (
            <NeighborWrapper key={index}>
              <InfoContent>ID: {neighbor.id}</InfoContent>
              {renderNeighborWeights(neighbor.id)}
            </NeighborWrapper>
          ))}
        </>
      )}
    </SidebarContainer>
  );
};

export default GraphSidebar;
