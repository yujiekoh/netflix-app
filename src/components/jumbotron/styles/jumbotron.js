// macro file from styled-components gives you the component name in your browser dev tools. This is useful for debugging
// without macro, you would see random alphanumeric class names
import styled from "styled-components/macro";

// You can style any element you want - div, section, p, h1 etc. In the template literal, you write regular CSS
// You can leave the template literal empty if you do not want to pass any CSS

// Here's what you want to achieve in your jumbotron:
// The text and image for each row should alternate. In the first row, the image is on the right, the text is on the left.
// In the second row, image will be on the left and text on the right

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  /* destructure the prop you are passing down from the Inner component in index.js in flex-direction */
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
      flex-direction: column;
  }
`;

// In the Container, you can reference other constants in the same file provided you declared them before Container.
// You are taking the last Item's h2 and applying more space between it and the image.
// If you didn't do this, there would be less space between the h2 and image in the last Item
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}: last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
