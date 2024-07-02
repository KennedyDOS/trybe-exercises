import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCharacter } from './redux/actions';
import CharacterCard from './components/CharacterCard';
import { Dispatch } from './types/types';


import './App.css';

function App() {
    const [character, setCharacter] = useState('');
    const dispatch: Dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                onChange={(
                    { target }: React.ChangeEvent<HTMLInputElement>,
                ) => setCharacter(target.value)}]
            value={character}
            placeholder="Digite o nome de um personagem"
            />
            <button
                type="button"
                onClick={() => dispatch(fetchCharacter(character))}
            >
                Buscar
            </button>
            <CharacterCard />
        </div>
    )
}

export default App;