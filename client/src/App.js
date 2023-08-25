import './App.css';
import Homepage from "./screens/Homepage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import NavBar from './components/NavBar';
import RegisterPage from './screens/RegisterPage';
import SearchScreen from './screens/SearchScreen';
import AboutUs from './screens/AboutUs';

function App() {
  return <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/search" element={<SearchScreen />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
          </Routes>;
          </>
}

export default App;
