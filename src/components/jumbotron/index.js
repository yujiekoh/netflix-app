// In this file, you can create as many components related to Jumbotron as you wish, using dot notation

import React from 'react';
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

// If no direction prop gets passed into Jumbotron, default it to 'row'
// In a compound component, the user can pass anything they want in the Jumbotron component in app.js and the Jumbotron component in index.js will honour it
export default function Jumbotron({ direction = 'row', children, ...restProps }) {
    return (
      <Item {...restProps}>
        <Inner direction={direction}>
          {children}
        </Inner>
      </Item>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return (
        <Pane {...restProps}>
            {children}
        </Pane>
    )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}