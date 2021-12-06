import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store';

import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from './layout/Navbar';

import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Todolist from './pages/Todolist'
import Welcomepage from './pages/Welcomepage';

export default () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="/lists" element={<Todolist/>}/>
            <Route path="/" element={<Welcomepage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}