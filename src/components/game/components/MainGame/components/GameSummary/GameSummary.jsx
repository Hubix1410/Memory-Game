import React from 'react'
import './gameSummary.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../../../../../../features/gameSlice';
import { collect } from 'collect.js';

const GameSummary = () => {

    const dispatch = useDispatch();
    let playersData = useSelector((state) => state.game.playersData);
    playersData = collect(playersData);
    playersData = playersData.sortByDesc('points');
    
    playersData = playersData.items.map((element, index) => {
        if(index === 0 || element.points === playersData.items[0].points){
            return {...element, isWinner: true};
        }
        return element;
    })
    
    console.log(playersData);
    
    return (
        <div className='gameSummary'>
            <section className='gameSummary__container'>
                <h2 className='gameSummary__title'>
                    Player 3 Wins!
                </h2>
                <h3 className='gameSummary__subtitle'>
                    Game Over! Here are the results...
                </h3>
                
                {
                    playersData.map((element) =>
                        <div className={`gameSummary__player gameSummary__player${element.isWinner ? "--isWinner" : "--isLosser"}`}>
                            <p className='gameSummary__player__name'>
                                {element.name} {element.isWinner && "(Winner!)"}
                            </p>
                            <p className='gameSummary__player__points'>
                                {element.points} Pairs
                            </p>
                        </div>
                    )
                }
{/* 
                <div className='gameSummary__player gameSummary__player--isWinner'>
                    <p className='gameSummary__player__name'>
                        Player 3 (Winner!)
                    </p>
                    <p className='gameSummary__player__points'>
                        6 Pairs
                    </p>
                </div> */}

                <div className='gameSummary__button__container'>
                    <button className='gameSummary__button gameSummary__button--restart' onClick={() => dispatch(restartGame())}>
                        Restart
                    </button>

                    <Link to='/'>
                        <button className='gameSummary__button gameSummary__button--new_game'>
                            Setup New Game
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default GameSummary
