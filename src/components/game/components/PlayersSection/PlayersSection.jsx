import React from 'react';
import { useSelector } from 'react-redux';
import './playersSection.scss';
import './playerTab.scss';

const PlayerTab = ({player}) => {
    let playerTabClass;
    if (player.isTurn){
        playerTabClass = 'playerTab__turn';
    } else {
        playerTabClass = 'playerTab';
    }

    return (
        <div className={`${playerTabClass}`}>
            <p className={`${playerTabClass}__title`}>{player.name}</p>
            <p className={`${playerTabClass}__points`}>{player.points}</p>
        </div>
    )
}

const PlayersSection = () => {

    const players = useSelector((state) => state.game.playersData);

    return (
        <section className='playerSection'>
            {
                players.map((player, index) => { return <PlayerTab key={index} player={player} /> })
            }
        </section>
    )
}

export default PlayersSection;