import { createSlice } from '@reduxjs/toolkit';
import { basicPlayersData } from './helpers';
import arrayShuffle from 'array-shuffle';

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		gameConfig: {
			theme: 'numbers',
			players: 1,
			gridSize: '4x4',
		},
		playersData: [
			{ id: 1, name: 'Player 1', points: 0, isTurn: true, isWinner: false },
			{ id: 2, name: 'Player 2', points: 0, isTurn: false, isWinner: false },
			{ id: 3, name: 'Player 3', points: 0, isTurn: false, isWinner: false },
			{ id: 4, name: 'Player 4', points: 0, isTurn: false, isWinner: false },
		],
		mapConfiguration: [],
		isGameOver: false,
	},
	reducers: {
		setGameConfiguration: (state, action) => {
			state.gameConfig = action.gameConfig;
		},

		setMapConfiguration: (state, action) => {
			state.mapConfiguration = action.payload;
		},

		hideMapVisible: (state) => {
			const newMapConfiguration = state.mapConfiguration.map((element) => {
				if (element.status === 'visible') {
					return { ...element, status: 'hidden' };
				}
				return element;
			});
			state.mapConfiguration = newMapConfiguration;
		},

		setPlayersData: (state, action) => {
			state.playersData = action.payload;
		},

		setGameToOver: (state) => {
			state.isGameOver = true;
		},

		restartGame: (state) => {
			let restartedMap = state.mapConfiguration.map((element) => {
				return { ...element, status: 'hidden' };
			});

			restartedMap = arrayShuffle(restartedMap);
			state.playersData = basicPlayersData;

			state.isGameOver = false;
			state.mapConfiguration = restartedMap;
		},
	},
});

export const { hideMapVisible, setMapConfiguration, setGameConfiguration, setPlayersData, setGameToOver, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
