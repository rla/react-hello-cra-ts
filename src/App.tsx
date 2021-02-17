import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CountPage } from './components/CountPage';
import { ProfilePage } from './components/ProfilePage';
import logo from './logo-turnit.svg';

export const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="Logo" width="400" />
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={CountPage} />
            <Route exact={true} path="/profile" component={ProfilePage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
};
