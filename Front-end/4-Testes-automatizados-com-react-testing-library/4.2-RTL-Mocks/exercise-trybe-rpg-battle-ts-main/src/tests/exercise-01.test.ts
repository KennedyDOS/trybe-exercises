import { vi } from 'vitest';
import rollDice from '../service/rollDice';

it('testa a função `rollDice`', () => {
  vi.spyOn(global.Math, 'random').mockReturnValue(0.8);

  expect(rollDice(20)).toBe(16);
  expect(global.Math.random).toHaveBeenCalledTimes(1);
});