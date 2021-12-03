import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './layout/Navbar';
import Login from './components/Login'
import Register from './components/Register'
import Projects from './components/Projects';
import List from './components/List'
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/lists" element={<List/>}/>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
