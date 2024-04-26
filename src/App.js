// import logo from './logo.svg';
import './App.css';
import BlogPost from './blog/Blog';
import ResponsiveAppBar from './navbar/Navbar';
import Pics from './pictures/Pics';
import Welcome from './welcome/Welcome';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Welcome/>
      <Pics/>
      <BlogPost/>
    </div>
  );
}

export default App;
