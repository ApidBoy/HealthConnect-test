import './App.css';
import Homepage from "./screens/Homepage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./screens/LoginPage";

function App() {
  return <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>;
}

export default App;
