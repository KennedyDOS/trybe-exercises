// import rollDice from '../service/rollDice';
// import rollMultipleDice from '../service/rollMultipleDice';
import { vi } from 'vitest';

import rollMultipleDice from '../service/rollMultipleDice';
import rollDice from '../service/rollDice';

vi.mock('../service/rollDice');

it('testa a função `rollMultipleDice`', () => {
  (rollDice as any).mockReturnValueOnce(6)
    .mockReturnValueOnce(4);
  expect(rollMultipleDice(2, 20)).toBe(10);
  expect(rollDice).toHaveBeenCalledTimes(2);
});