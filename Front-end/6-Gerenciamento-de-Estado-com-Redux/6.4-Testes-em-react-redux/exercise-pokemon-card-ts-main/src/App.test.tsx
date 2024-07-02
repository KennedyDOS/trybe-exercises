import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';


describe('Página principal', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(mockFetch as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const buttonE1 = await screen.findByRole('button');
    expect(buttonE1).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = `https://pokeapi.co/api/v2/pokemon/${firstPokemonId}`;
    
    (randomNumber as any).mockRetrunValue(firstPokemonId);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = `https://pokeapi.co/api/v2/pokemon/${firstPokemonId}`;
    
    const secondPkemonId = 96;
    const secondEndpoint = `https://pokeapi.co/api/v2/pokemon/${secondPkemonId}`;
    
    (randomNumber as any).mockReturnValue(secondPkemonId);
    (randomNumber as any).mockReturnValueOnce(firstPokemonId);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);

    const buttonE1 = await screen.findByRole('button');
    userEvent.click(buttonE1);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(secondEndpoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(LOADING_TEXT));

    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonImage = screen.getByTestId('pokemon-image');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });
});
