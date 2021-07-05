import './App.css';
import Login from './components/login/Login'
import Account from './components/account/Account'
import { auth } from './firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Registration from './components/registration/Registration'

function App() {
  const [userIsLogged]=useAuthState(auth)
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/">
              {userIsLogged ? <Account /> : <Login />}
              </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
