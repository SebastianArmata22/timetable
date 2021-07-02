import './App.css';
import NavBar from './components/NavBar/NavBar'
import Schedule from './components/schedule/Schedule';
import Counter from './components/counter/Counter'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Counter />
      <Schedule />
    </div>
  );
}

export default App;
