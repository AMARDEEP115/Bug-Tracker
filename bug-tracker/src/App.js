import './App.css';
import { Navbar } from './Components/Navbar';
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
    </div>
  );
}

export default App;
