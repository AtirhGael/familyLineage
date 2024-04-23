import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './navbar/Navbar';
import Welcome from './welcome/Welcome';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Welcome/>
    </div>
  );
}

export default App;
