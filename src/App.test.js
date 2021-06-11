import { render } from '@testing-library/react';
import App from './App';
import { obfuscate, updatedCard } from './utils';


test('obfuscate credit card', () => {
  const card = '4111111111111111';
  expect(obfuscate(card)).toBe('************1111');
});

test('test if updated card', () => {
  const oldCard = '2222';
  const newCard = '6666'
  expect(updatedCard(oldCard, newCard));
});