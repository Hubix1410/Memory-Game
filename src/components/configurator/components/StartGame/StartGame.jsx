import React from 'react'
import './startGame.scss'
import { Link } from 'react-router-dom'

const StartGame = () => {
    return (
        <Link to="/game/">
            <button className='startGame'>
                Start Game
            </button>
        </Link>
    )
}

export default StartGame