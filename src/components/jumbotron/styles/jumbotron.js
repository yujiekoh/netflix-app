// macro file from styled-components gives you the component name in your browser dev tools. This is useful for debugging
// without macro, you would see random alphanumeric class names
import styled from "styled-components/macro";

// You can style any element you want - div, section, p, h1 etc. In the template literal, you write regular CSS

// Here's what you want to achieve in your jumbotron:
// The text and image for each row should alternate. In the first row, the image is on the right, the text is on the left.
// In the second row, image will be on the left and text on the right

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
      flex-direction: column;
  }
  
`;
