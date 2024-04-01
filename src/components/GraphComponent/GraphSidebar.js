import React from "react";
import { Link } from "react-router-dom";
import {
  InfoContent,
  InfoTitle,
  NeighborWrapper,
  SidebarContainer,
} from "../../styles/GraphComponentStyles";
import Check from "../utils/Check";
import RenderWeights from "../utils/RenderWeights";

const GraphSidebar = ({ data, repo, graph }) => {
  const renderNeighborWeights = (neighborId) => {
    const weights = data.links
      .filter(
        (link) => link.source.id === neighborId || link.target.id === neighborId
      )
      .map((link) => link.weights || [])
      .flat();
    return (
      <RenderWeights
        weights={weights}
        key={neighborId}
        neighborId={neighborId}
        graph={graph}
      />
    );
  };

  return (
    <SidebarContainer>
      {data.node && (
        <>
          <InfoTitle>Node Information</InfoTitle>
          <InfoContent>
            ID: {data.node.id}
            <br></br>
            {/* {console.log(graph.content[data.node.id])} */}
            File:{" "}
            <Link
              to={`https://github.com/${repo}/blob/main/${data.node.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Here
            </Link>
          </InfoContent>
        </>
      )}

      {data.link && (
        <>
          <InfoTitle>Link Information</InfoTitle>
          <InfoContent>
            Source: {data.link.source.id || data.link.source}
            <br></br>
            File:{" "}
            <Link
              to={`https://github.com/${repo}/blob/main/${
                data.link.source.id || data.link.source
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Here
            </Link>
          </InfoContent>
          <InfoContent>
            Target: {data.link.target.id || data.link.target}
            <br></br>
            File:{" "}
            <Link
              to={`https://github.com/${repo}/blob/main/${
                data.link.target.id || data.link.target
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Here
            </Link>
          </InfoContent>
          {/* {renderWeights(data.link.weights || [])} */}
        </>
      )}

      {data.neighbors.length > 0 && (
        <>
          <InfoTitle>Neighbors</InfoTitle>
          {data.neighbors.map((neighbor, index) => (
            <NeighborWrapper key={index}>
              {Check(neighbor.id, data.links, graph) ? (
                <>
                  <InfoContent>
                    ID: {neighbor.id}
                    <br></br>
                    File:{" "}
                    <Link
                      to={`https://github.com/${repo}/blob/main/${neighbor.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Here
                    </Link>
                  </InfoContent>
                  {renderNeighborWeights(neighbor.id)}
                </>
              ) : null}
            </NeighborWrapper>
          ))}
        </>
      )}
    </SidebarContainer>
  );
};

export default GraphSidebar;
