import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login_page'
import UserContainer from './pages/user_container'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'


/*store={props.store} dispatch={props.dispatch}*/

function App(props) {
  return (
    <div className="App">
          <Router>
            <Switch>
            <Route exact path='/' render={()=><LoginPage/>}/>
            <Route path='/user' render={()=><UserContainer/>}
               />
            </Switch>
          </Router>
    </div>
  );
}

export default App;

