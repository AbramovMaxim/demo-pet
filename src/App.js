import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs 
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch} 
            />} />
            <Route path='/profile' element={<Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch} 
            />} />
            </Routes>
        </div>
      </div>
  );
}

export default App;

// смотреть Dialogs.js там документация
