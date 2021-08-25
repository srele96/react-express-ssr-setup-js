import routes from '../shared-routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WithData } from './pages/WithData';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.withData}>
          <WithData />
        </Route>
        <Route exact path={routes.index}>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
