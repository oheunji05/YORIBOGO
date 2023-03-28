import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import Navber from './Recipe/navber/Navber';
import Home from './Recipe/Home';
import Write from './Recipe/write/Write';
import Detail from './Recipe/detail/Detail';
import Footer from './Recipe/footer/Footer';
import List from './Recipe/list/List';

function App() {
  return (
    <div className="App">

      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/write' element={<Write/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
