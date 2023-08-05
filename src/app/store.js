import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import gameSlice from '../features/gameSlice';

export default configureStore({
	reducer: {
		game: gameSlice,
	},
	middelWare: [composeWithDevTools],
});
