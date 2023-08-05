import arrayShuffle from 'array-shuffle';
import { useSelector, useDispatch } from 'react-redux';
import { setMapConfiguration } from '../../../../features/gameSlice';

//  MAP GENERATION

// const NUMS_TO_SYMBOLS = [
// 	{ number: '1', symbol: '㊔' },
// 	{ number: '2', symbol: '㊖' },
// 	{ number: '3', symbol: '㊝' },
// 	{ number: '4', symbol: '㊟' },
// 	{ number: '5', symbol: '㊠' },
// 	{ number: '6', symbol: '㊢' },
// 	{ number: '7', symbol: '㊩' },
// 	{ number: '8', symbol: '㊪' },
// 	{ number: '9', symbol: '㊬' },
// 	{ number: '10', symbol: '㊊' },
// 	{ number: '11', symbol: '㊋' },
// 	{ number: '12', symbol: '㊌' },
// 	{ number: '13', symbol: '㊍' },
// 	{ number: '14', symbol: '㊎' },
// 	{ number: '15', symbol: '㊏' },
// 	{ number: '16', symbol: '㊐' },
// 	{ number: '17', symbol: '㊑' },
// 	{ number: '18', symbol: '㊒' },
// ];

const NUMS_TO_SYMBOLS = [
	{ number: 1, symbol: '✿' },
	{ number: 2, symbol: '✔' },
	{ number: 3, symbol: '✚' },
	{ number: 4, symbol: '✈' },
	{ number: 5, symbol: '✉' },
	{ number: 6, symbol: '✇' },
	{ number: 7, symbol: '✂' },
	{ number: 8, symbol: '✚' },
	{ number: 9, symbol: '✡' },
	{ number: 10, symbol: '❍' },
	{ number: 11, symbol: '❡' },
	{ number: 12, symbol: '❤' },
	{ number: 13, symbol: '➤' },
	{ number: 14, symbol: '➽' },
	{ number: 15, symbol: '✎' },
	{ number: 16, symbol: '✒' },
	{ number: 17, symbol: '✺' },
	{ number: 18, symbol: '❙' },
];

let BASIC_ARRAY = [
	{ id: 0, value: 1, status: 'hidden' },
	{ id: 1, value: 1, status: 'hidden' },
	{ id: 2, value: 2, status: 'hidden' },
	{ id: 3, value: 2, status: 'hidden' },
	{ id: 4, value: 3, status: 'hidden' },
	{ id: 5, value: 3, status: 'hidden' },
	{ id: 6, value: 4, status: 'hidden' },
	{ id: 7, value: 4, status: 'hidden' },
	{ id: 8, value: 5, status: 'hidden' },
	{ id: 9, value: 5, status: 'hidden' },
	{ id: 10, value: 6, status: 'hidden' },
	{ id: 11, value: 6, status: 'hidden' },
	{ id: 12, value: 7, status: 'hidden' },
	{ id: 13, value: 7, status: 'hidden' },
	{ id: 14, value: 8, status: 'hidden' },
	{ id: 15, value: 8, status: 'hidden' },
	{ id: 16, value: 9, status: 'hidden' },
	{ id: 17, value: 9, status: 'hidden' },
	{ id: 18, value: 10, status: 'hidden' },
	{ id: 19, value: 10, status: 'hidden' },
	{ id: 20, value: 11, status: 'hidden' },
	{ id: 21, value: 11, status: 'hidden' },
	{ id: 22, value: 12, status: 'hidden' },
	{ id: 23, value: 12, status: 'hidden' },
	{ id: 24, value: 13, status: 'hidden' },
	{ id: 25, value: 13, status: 'hidden' },
	{ id: 26, value: 14, status: 'hidden' },
	{ id: 27, value: 14, status: 'hidden' },
	{ id: 28, value: 15, status: 'hidden' },
	{ id: 29, value: 15, status: 'hidden' },
	{ id: 30, value: 16, status: 'hidden' },
	{ id: 31, value: 16, status: 'hidden' },
	{ id: 32, value: 17, status: 'hidden' },
	{ id: 33, value: 17, status: 'hidden' },
	{ id: 34, value: 18, status: 'hidden' },
	{ id: 35, value: 18, status: 'hidden' },
];

export const generateGameMap = (mapConfig) => {
	let shuffled = [];

    console.log(mapConfig);

	if (mapConfig.gridSize === '4x4') {
		BASIC_ARRAY = BASIC_ARRAY.slice(0, 16);
		shuffled = arrayShuffle(BASIC_ARRAY);
	} else if (mapConfig.gridSize === '6x6') {
		shuffled = arrayShuffle(BASIC_ARRAY);
	}

	if (mapConfig.theme === 'icons') {
		shuffled = shuffled.map((element) => {
            const newValue = NUMS_TO_SYMBOLS.find(item => item.number === element.value);
            console.log(newValue);
			return { ...element, value: newValue.symbol };
		});
	}

	return shuffled;
};

// TOKEN MENAGMENT

export let setMatchingTokens = (updatedMap) => {
	updatedMap = updatedMap.map((element) => {
		if (element.status === 'visible') {
			return { ...element, status: 'matching' };
		}
		return element;
	});

    return updatedMap;
};

// TURN MENAGMENT

export const updatePlayersData = (playersData, addPoints) => {

    // ADD POINTS
    
    if (addPoints){
		playersData = playersData.map((element) => {
			if (element.isTurn === true) {
				return { ...element, points: element.points + 1 };
			}
			return element;
		});
    }

    // CHANGE TURN

    let currentPlayer = playersData.find((el) => el.isTurn);
    playersData = playersData.map((element) => {
        return {...element, isTurn: false}
    })

    let newPlayerTurn = currentPlayer.id + 1;

    if (newPlayerTurn > 4){
        newPlayerTurn = 1;
    } 

    playersData = playersData.map((element) => {
        if(element.id === newPlayerTurn){
            return { ...element, isTurn: true }; 
        }
		return { ...element, isTurn: false };
	});

    return playersData;
}

export const checkIsGameOver = (updatedMap) => {
    return updatedMap.every((element) => element.status === 'matching');
};
