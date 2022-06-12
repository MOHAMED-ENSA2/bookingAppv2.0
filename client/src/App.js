import './App.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Home from "./pages/home/Home"
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import TopNavbar from "./components/navbar/TopNavbar"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className='app--navbar-container'>
        <div className='app--navbar'>
          <TopNavbar/>
        </div>
      </div>
        <Routes>
            <Route 
              path=''
              element = {<Home/>}
            />
            <Route 
              path='hotels'
              element = {<List/>}
            />
            <Route 
              path='hotels/:id'
              element = {<Hotel/>}
            />
            <Route 
              path='login'
              element = {<Login/>}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
