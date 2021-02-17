import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

export const snapshotTest = (Component: any) => {
  const store = createStore(rootReducer);
  expect((mount(
    <Provider store={store}>
      <Component />
    </Provider>
  ).html())).toMatchSnapshot();
};
