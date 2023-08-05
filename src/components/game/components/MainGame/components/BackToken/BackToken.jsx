import React from 'react'
import './backToken.scss'
import { backTokenClass } from './helpers'

const BackToken = ({gridSize}) => {
    const tokenClassName = backTokenClass(gridSize)
    return (
        <div className={tokenClassName}>
        </div>
    )
}

export default BackToken
