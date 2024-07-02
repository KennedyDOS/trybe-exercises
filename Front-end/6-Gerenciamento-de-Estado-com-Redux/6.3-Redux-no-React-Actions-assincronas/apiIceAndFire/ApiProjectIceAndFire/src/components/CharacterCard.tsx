
import { useSelector } from 'react-redux';
import { CharacterState } from '../types/types';

function CharacterCard() {
  const { character, isLoading, error } = useSelector((state: CharacterState) => state);

  if (error) { return <div>{error}</div>; }
  if (isLoading) { return <h3>Loading...</h3>; }

  if (character) {
    return (
      <div>
        <h2>
          {character.name}
        </h2>
        <p>{`Born ${character.born}`}</p>
        <h3>Titulos:</h3>
        <ol>
          {character.titles.map((title) => (
            <li key={ `${title}` }>{title}</li>
          ))}
        </ol>
        <h3>Aliases:</h3>
        <ol>
          {character.aliases.map((alias) => (
            <li key={ `${alias}` }>{alias}</li>
          ))}
        </ol>
      </div>
    );
  }

  return <div>Digite o nome do personagem e click para buscar!</div>;
}

export default CharacterCard;