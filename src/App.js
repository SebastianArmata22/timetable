import './App.css';
import Login from './components/login/Login'
import Account from './components/account/Account'
import { auth } from './firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [userIsLogged]=useAuthState(auth)
  return (
    <div className="App">
      {userIsLogged ? <Account /> : <Login />}
    </div>
  );
}

export default App;
