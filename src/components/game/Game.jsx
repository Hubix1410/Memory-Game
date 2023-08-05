import React from 'react';
import { PlayersSection, GameHeader, MainGame } from './components/';
import './game.scss';


const Game = () => {
    return (
        <div className='game'>
            <div className='game__container'>
                <GameHeader />
                <MainGame />
                <PlayersSection />
            </div>
        </div>
    )
}

export default Game;
