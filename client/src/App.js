import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store';

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from './layout/Navbar';

import Login from './components/Login'
import Register from './components/Register'
import List from './components/List'
import Welcome from './components/Welcome';

export default () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/lists" element={<List/>}/>
            <Route path="/" element={<Welcome/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}