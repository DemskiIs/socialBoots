import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import "./App.css"
import NavBar from './components/navBar/navBar';

const App: FC = () => {
   return (
      <div className='AppWrapper'>
         <NavBar />
         <div className='header' >Socialboots.</div>
         <AppRouter />
      </div>    
   )
}

export default App;
