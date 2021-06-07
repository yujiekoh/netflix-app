import React from 'react';
import { Inner } from './styles/jumbotron';

// If no direction prop gets passed into Jumbotron, default it to 'row'
export default function Jumbotron({ direction = 'row' }) {
    return (
        <Inner direction={direction}>
            <p>Hello</p>
        </Inner>
    )
}
