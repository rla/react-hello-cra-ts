import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import { DisplayCount } from '../components/DisplayCount';
import { increaseCount } from '../actions/count';
import { snapshotTest } from '../helper';

test('renders DisplayCount component', () => {
  const store = createStore(rootReducer);
  store.dispatch(increaseCount());
  render(
    <Provider store={store}>
      <DisplayCount />
    </Provider>
  );
  const spanElement = screen.getByTestId('display-count');
  expect(spanElement).toHaveTextContent('Vajutatud: 1');
});

test('snapshot', () => {
  snapshotTest(DisplayCount);
});
