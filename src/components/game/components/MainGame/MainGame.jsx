import React, { useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import './mainGame.scss';
import { generateGameMap, setMatchingTokens, updatePlayersData, checkIsGameOver } from './helpers';
import { FrontToken, BackToken, GameSummary } from './components/';
import { useSelector, useDispatch } from 'react-redux';
import { setMapConfiguration, hideMapVisible, setPlayersData, setGameToOver } from '../../../../features/gameSlice';

export const FinalToken = ({ text, tokenStatus, id }) => {
    
    const dispatch = useDispatch();
    const playersData = useSelector((state) => state.game.playersData);
    const mapConfig = useSelector((state) => state.game.gameConfig);
    const generatedMap = useSelector((state) => state.game.mapConfiguration);

    // UPDATES MAP ON CLICK
    const updateMap = (id) => {
        
        const amountOfVissbleTokens = generatedMap.filter(item => item.status === "visible").length;

        // PREVENTS SELECTING MORE THAN 2 TOKENS
        if (amountOfVissbleTokens < 2){

            // UPDATE MAP
            let updatedMap = generatedMap.map((item) => {
                if(item.id === id && item.status === 'hidden'){
                    return { ...item, status: 'visible' };
                } else {
                    return item
                }
            })

            const selectedTokens = updatedMap.filter(item => item.status === "visible");
            if (selectedTokens.length === 2){
                // CHECK IF TOKENS MATCH
                if (selectedTokens[0].value === selectedTokens[1].value){

                    updatedMap = setMatchingTokens(updatedMap);

                    // SET TOKENS TO MATCHING
                    dispatch(setMapConfiguration(updatedMap));

                    // UPDATE TURN
                    setTimeout(() => dispatch(setPlayersData(updatePlayersData(playersData, true))), 1000);

                }  else {

                    // FLIP TOKEN BACK AFTER 2 SECONDS
                    setTimeout(() => dispatch(hideMapVisible()), 1000);

                    // UPDATE TURN
                    setTimeout(() => dispatch(setPlayersData(updatePlayersData(playersData, false))), 1000);
                }              

                // CHEK IF GAME IS OVER

                console.log(checkIsGameOver(updatedMap))
                if (checkIsGameOver(updatedMap)){
                    dispatch(setGameToOver());
                }

            }
            return updatedMap;
        } else { 
            return generatedMap;
        }
        
    };

    // TOKEN GENERATION
    return (
        <div onClick={() => dispatch(setMapConfiguration(updateMap(id)))}>
            <ReactCardFlip isFlipped={tokenStatus != "hidden"} flipDirection="horizontal">
                <BackToken gridSize={mapConfig.gridSize} />
                <FrontToken text={text} tokenStatus={tokenStatus} gridSize={mapConfig.gridSize}/>
            </ReactCardFlip>
        </div>
    );
};

const MainGame = () => {
    const dispatch = useDispatch();
    const mapConfig = useSelector((state) => state.game.gameConfig);
    const generatedMap = useSelector((state) => state.game.mapConfiguration);
    const isGameOver = useSelector((state) => state.game.isGameOver);

    useEffect(() => {
        const updatedMap = generateGameMap(mapConfig);
        dispatch(setMapConfiguration(updatedMap));
    }, [dispatch, mapConfig.gridSize]);

    return (
        <main className="mainGame">
            <div className="mainGame__container">
                {generatedMap.map((element) => (
                    <FinalToken text={element.value} tokenStatus={element.status} id={element.id} key={`token-${element.id}`} />
                ))}
            </div>
            {isGameOver ? <GameSummary/> : ""}
        </main>
    );
};

export default MainGame;
