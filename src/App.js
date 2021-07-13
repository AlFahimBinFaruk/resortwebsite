import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home} from './pages/home';
import {Room} from './pages/room';
import {Singleroom} from './pages/singleroom';
import {Error} from './pages/error'
import {Navbar} from './componenet/navbar'
function App() {
  return (
    
    <Router>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar/>
        <Switch>
          <Route path="/room/:slug">
            <Singleroom />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <Error />
          </Route>
        </Switch>
    </Router>
    
    
  );
}

export default App;
