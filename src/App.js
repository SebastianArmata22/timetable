import './App.css';
import Login from './components/login/Login'
import { auth } from './firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Registration from './components/registration/Registration'
import Account from './components/account/Account';
import React from 'react';
import moment from "moment";
import 'moment/locale/en-gb' 
import 'moment/locale/pl' 
import { useTranslation } from "react-i18next"

function App() {
  const [userIsLogged]=useAuthState(auth)
  const { t, i18n } = useTranslation();
  const lang = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  moment.locale(lang)
  
  React.useEffect(() => {i18n.changeLanguage(lang)}, [])

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
