import React from 'react'
import "./gameHeader.scss"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { restartGame } from '../../../../features/gameSlice';

const GameHeader = () => {

    const dispatch = useDispatch();


    return (
        <header className='gameHeader'>
            <h1 className='gameHeader__title'>memory</h1>
            <button className='gameHeader__button gameHeader__button--restart' onClick={() => dispatch(restartGame())}>
                Restart
            </button>
            <Link to='/'>
                <button className='gameHeader__button gameHeader__button--new_game'>
                    New Game
                </button>
            </Link>
        </header>
    )
}

export default GameHeader
