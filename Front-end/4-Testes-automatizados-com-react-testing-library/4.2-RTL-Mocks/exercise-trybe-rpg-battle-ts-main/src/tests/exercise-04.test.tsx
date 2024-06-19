import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';

it('testa a requisição para a API', async () => {
  const mockedCharacters = [{
    id: 1,
    name: 'Chapolin Colorado',
    source: 'Chaves',
    defensePoints: 60,
  }];

  vi.spyOn(global, 'fetch');
  (global.fetch as any).mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockedCharacters),
  });

  
  render(<App />);

  const enemyEl = await screen.findByRole('heading', { name: 'Chapolin Colorado' });

  expect(enemyEl).toBeInTheDocument();
});