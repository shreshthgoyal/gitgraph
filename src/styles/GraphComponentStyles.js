import styled from "styled-components";

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  color: #5d4037;
  padding: 20px;
  border-radius: 16px;
  margin: 20px auto;
  width: 120vh; // Adjust based on padding
  height: 55vh;
  overflow: hidden;
  align-items: start; // Prevent components from stretching to fill the container height
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const GraphSVG = styled.svg`
  flex-shrink: 0; // Prevent SVG from resizing
  width: 80vh;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  border: 2px solid #bdbdbd;
`;

export const SidebarContainer = styled.div`
  flex-grow: 1;
  max-width: 40vh; // Ensures sidebar cannot push the SVG
  height: 100%;
  padding: 20px;
  background: #eceff1;
  border-radius: 12px;
  overflow-y: auto; // Make sidebar content scrollable
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoTitle = styled.h4`
  color: #795548; /* Deep coffee color */
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const InfoContent = styled.div`
  color: #5d4037; /* Coffee color */
  margin: 5px 0;
  font-size: 16px;
  line-height: 1.6;
`;

export const FunctionList = styled.ul`
  list-style: none inside;
  padding: 0;
  margin: 10px 0;
  color: #795548; /* Deep coffee color for list items */
`;

export const NeighborWrapper = styled.div`
  padding-top: 10px;
  border-top: 2px dashed #795548; /* Coffee color dashed line */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #61dafb;
`;

export const InputField = styled.input`
  width: 40%;
  padding: 12px;
  margin: 20px 0;
  border-radius: 8px;
  border: 2px solid #795548; /* Coffee border */
  color: #5d4037; /* Coffee color */
  background-color: #ffffff; /* Light background */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #8d6e63; /* Focused state border */
    box-shadow: 0 0 8px #8d6e63; /* Focused state shadow */
  }

  &::placeholder {
    color: #bdbdbd; /* Placeholder text color */
  }
`;
