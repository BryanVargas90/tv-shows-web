import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home.jsx';
import AddShow from './scenes/AddShow.jsx';
import Login from './scenes/Login.jsx'
import Signup from './scenes/Signup.jsx';
import './styles/App.css';

function App() {
  const [shows, setShows] = useState();
  const[user, setUser] = useState();



  return (
    <>

  

   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home shows={shows} setShows={setShows}/>}/>
      <Route path='/signup' element={<Signup setUser={setUser}/>}/>
      <Route path='/addshow' element={<AddShow setShows={setShows} />}/>
      <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
