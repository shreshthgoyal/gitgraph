import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

// Media template helper for responsive design
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  color: #5d4037;
  padding: 20px;
  border-radius: 16px;
  margin: 20px auto;
  width: 75vw; // Use vw for responsive width
  height: auto; // Auto height for flexibility
  max-height: 55vh;
  overflow: hidden;
  align-items: start;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${media.desktop`width: 80vw;`}
  ${media.tablet`width: 90vw;`}
  ${media.phone`flex-direction: column; align-items: center; width: 95vw;`};
`;

export const GraphSVG = styled.svg`
  flex-shrink: 0;
  width: 60vw;
  height: 45vh;
  background-color: #ffffff;
  border-radius: 12px;
  border: 2px solid #bdbdbd;

  ${media.desktop`width: 65vw; height: 40vh;`}
  ${media.tablet`width: 70vw; height: 35vh;`}
  ${media.phone`width: 90vw; height: 30vh;`};
`;

export const SidebarContainer = styled.div`
  flex-grow: 1;
  max-width: 35vw;
  height: auto; // Allow dynamic height
  padding: 20px;
  background: #eceff1;
  border-radius: 12px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${media.desktop`max-width: 40vw;`}
  ${media.tablet`max-width: 45vw;`}
  ${media.phone`max-width: 90vw;`};
`;

export const InfoTitle = styled.h4`
  color: #795548;
  margin-bottom: 10px;
  font-size: 1.25rem; // Use rem for scalability
  font-weight: 600;
`;

export const InfoContent = styled.div`
  color: #5d4037;
  margin: 5px 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const FunctionList = styled.ul`
  list-style: none inside;
  padding: 0;
  margin: 10px 0;
  color: #795548;
`;

export const NeighborWrapper = styled.div`
  padding-top: 10px;
  border-top: 2px dashed #795548;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Ensure full screen height
  color: #61dafb;
`;

export const InputField = styled.input`
  width: 60%; // Start with a wider input on smaller screens
  padding: 12px;
  margin: 20px 0;
  border-radius: 8px;
  border: 2px solid #795548;
  color: #5d4037;
  background-color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8d6e63;
    box-shadow: 0 0 8px #8d6e63;
  }

  &::placeholder {
    color: #bdbdbd;
  }

  ${media.desktop`width: 40%;`}
  ${media.tablet`width: 50%;`}
  ${media.phone`width: 70%;`};
}`;

export const ResponsiveText = styled.div`
  font-size: 1rem; // Base font size

  ${media.desktop`font-size: 1rem;`} // Adjust font size for different devices
  ${media.tablet`font-size: 0.9rem;`}
  ${media.phone`font-size: 0.8rem;`};
`;
