// import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './navbar/Navbar';
import Pics from './pictures/Pics';
import Welcome from './welcome/Welcome';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Welcome/>
      <Pics/>
    </div>
  );
}

export default App;
