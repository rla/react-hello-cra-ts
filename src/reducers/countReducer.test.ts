import { increaseCount, setCount } from '../actions/count';
import { countReducer, initialCountState } from './countReducer';

test('setCount action', () => {
  const initial = initialCountState;
  const final = countReducer(initial, setCount(99));
  expect(final.count).toBe(99);
});

test('increase action', () => {
  const initial = initialCountState;
  const final = countReducer(initial, increaseCount());
  expect(final.count).toBe(1);
});
