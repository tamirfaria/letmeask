import { BrowserRouter, Route } from 'react-router-dom';
import NewRoom from "./containers/NewRoom";
import Home from "./containers/Home";
import { AuthContextProvider } from './context/AuthContext/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/room/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
