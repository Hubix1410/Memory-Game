import React from 'react';
import './frontToken.scss'
import { frontTokenClass } from './helpers.js';

const FrontToken = ({ text, tokenStatus, gridSize }) => {
    const tokenClass = frontTokenClass(gridSize, tokenStatus);
    return (
        <div className={tokenClass}>
            {text}
        </div>
    )
}

export default FrontToken;
