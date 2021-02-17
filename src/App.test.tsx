import { render, screen } from '@testing-library/react';
import { App } from './App';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { mount } from "enzyme";
import { snapshotTest } from './helper';

test('renders learn react link', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App  />
    </Provider>
  );
  const linkElement = screen.getByText(/Vajutatud: 0/);
  expect(linkElement).toBeInTheDocument();
});

test('click count button and correct display', () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const button = screen.getByTestId('plusone-button');
  button.click();
  const spanElement = screen.getByTestId('display-count');
  expect(spanElement).toHaveTextContent('Vajutatud: 1');
});

test('app snapshot is stable', () => {
  snapshotTest(App);
});
