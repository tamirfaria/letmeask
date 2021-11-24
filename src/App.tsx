import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewRoom from "./containers/NewRoom";
import Home from "./containers/Home";
import { AuthContextProvider } from './context/AuthContext/AuthContext';
import Room from './containers/Room';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
