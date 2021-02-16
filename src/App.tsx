import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { CountPage } from './components/CountPage';
import { ProfilePage } from './components/ProfilePage';
import { rootReducer } from './reducers/rootReducer';

const anyWindow = window as any;
const store = createStore(rootReducer,
  anyWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
  anyWindow.__REDUX_DEVTOOLS_EXTENSION__()
);

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={CountPage} />
              <Route exact={true} path="/profile" component={ProfilePage} />
            </Switch>
          </BrowserRouter>
      </div>
    </Provider>
  );
};
