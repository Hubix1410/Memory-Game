import { Route, Routes } from 'react-router';
import { Configurator, Game } from './components';
import './App.scss';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route
                    path="/"
                    element={<Configurator />}
                />
                <Route
                    path="/game"
                    element={<Game />}
                />
            </Routes>
        </Provider>
    );
}

export default App;
