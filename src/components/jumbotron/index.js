// In this file, you can create as many components related to Jumbotron as you wish, using dot notation

import React from 'react';
import { Inner, Container } from './styles/jumbotron';

// If no direction prop gets passed into Jumbotron, default it to 'row'
// The user can pass anything they want in the Jumbotron component in app.js and the Jumbotron component in index.js will honour it
export default function Jumbotron({ direction = 'row', children, ...restProps }) {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}