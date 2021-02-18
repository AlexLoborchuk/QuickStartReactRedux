import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login';
import UserContainer from './pages/user_container';
import ProfileContainer from './pages/profile_container';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';


/*store={props.store} dispatch={props.dispatch}*/

function App(props) {
  return (
    <div className="App">
          <Router>
            <Switch>
                <Route exact path='/' render={()=><Redirect to='/login'/>}/>
              <Route path='/login' render={()=><LoginPage/>}/>
              <Route path='/user' render={()=><UserContainer/>}/>
              <Route path='/profile/:userId' render={()=><ProfileContainer/>}/>
            </Switch>
          </Router>
    </div>
  );
}

export default App;

